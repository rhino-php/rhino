<?php
declare(strict_types=1);

/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link      https://cakephp.org CakePHP(tm) Project
 * @since     0.2.9
 * @license   https://opensource.org/licenses/mit-license.php MIT License
 */
namespace Rhino\Controller;

use Rhino\Controller\NodesController;

use Cake\Core\App;
use Cake\Core\Configure;
use Cake\Http\Exception\ForbiddenException;
use Cake\Http\Exception\NotFoundException;
use Cake\Http\Response;
use Cake\View\Exception\MissingTemplateException;
use Cake\Controller\ControllerFactory;
use Rhino\Model\Table\PagesTable;
use Cake\Http\Client;
use Dom\HTMLDocument;

/**
 * Static content controller
 *
 * This controller will render views from templates/Pages/
 *
 * @link https://book.cakephp.org/4/en/controllers/pages-controller.html
 */
class PagesController extends NodesController {

	private bool $useTable = true;

	public function initialize(): void {
		parent::initialize();

		// Make tables optionals
		try {

			$this->Pages = $this->fetchTable('Rhino.Pages');
			$this->Nodes = $this->Pages;
			$this->Components = $this->fetchTable('Rhino.Components');
		} catch (\Throwable $th) {
			$this->useTable = false;
		}

		$this->composeTemplate = 'Rhino.compose';
		$this->uploadFolder = 'file_upload';
		$this->basePath = join(DS, [ROOT, 'data']);

		if ($this->request->is('htmx')) {
			$this->viewBuilder()->disableAutoLayout();
		}
	}

	public function beforeFilter(\Cake\Event\EventInterface $event) {
		parent::beforeFilter($event);
		// Configure the login action to not require authentication, preventing
		// the infinite redirect loop issue
		$this->Authentication->addUnauthenticatedActions(['display', 'getFile']);
		$this->FormProtection->setConfig('unlockedActions', [
			'test',
			'savePage',
			'new',
			'remove',
			'toggle',
			'move',
			'switch',
			'fetchUrl',
			'uploadFile',
			'delete',
		]);
	}

	public function test() {
		$this->request->allowMethod(['post']);
		return $this->response->withStringBody(__('this is a Test'));
	}

	/**
	 * Displays a view
	 *
	 * @param string ...$path Path segments.
	 * @return \Cake\Http\Response|null
	 * @throws \Cake\Http\Exception\ForbiddenException When a directory traversal attempt.
	 * @throws \Cake\View\Exception\MissingTemplateException When the view file could not
	 *   be found and in debug mode.
	 * @throws \Cake\Http\Exception\NotFoundException When the view file could not
	 *   be found and not in debug mode.
	 * @throws \Cake\View\Exception\MissingTemplateException In debug mode.
	 */
	public function display(string ...$path) {
		if (in_array('..', $path, true) || in_array('.', $path, true)) {
			throw new ForbiddenException();
		}

		$slug = $subpage = null;

		if (!empty($path[0])) {
			$slug = $path[0];
		}

		if (!empty($path[1])) {
			$lang = $path[1];
		}

		$layout = 'default';
		$template = $slug;

		if ($this->useTable) {
			$page = $this->Pages->slug(urldecode(string: $slug));
		}

		if (!empty($page)) {

			$pageTitle = $page->name;

			if ($page->role === 1) { // Link
				$redirect = $this->redirect($page->content);
				return $redirect;
			}

			$children = $this->Pages->find('children', for: $page->id ?? 1)
				->find('threaded')
				->contain(['Templates'])
				->all();

			$this->set(compact('page', 'subpage', 'children', 'pageTitle'));
			$template = 'Rhino.display';
			$layout = $page->template->element;
		}

		try {
			$this->viewBuilder()->setClassName('Rhino.Page');
			$this->viewBuilder()->setLayout($layout);
			$this->setPlugin(null);
			return $this->render($template);
		} catch (MissingTemplateException $exception) {
			if (Configure::read('debug')) {
				throw $exception;
			}
			throw new NotFoundException();
		}
	}

	/**
	 * Index method
	 *
	 * @return \Cake\Http\Response|null|void Renders view
	 */
	public function index() {
		$pages = $this->Pages->find('threaded')->where(['node_type' => 0])->orderBy(["lft" => 'ASC']);

		$this->set([
			'pages' => $pages,
		]);

		try {
			return $this->render('Rhino.index');
		} catch (MissingTemplateException $exception) {
			if (Configure::read('debug')) {
				throw $exception;
			}
			throw new NotFoundException();
		}
	}

	/**
	 * Add method
	 *
	 * @return \Cake\Http\Response|null|void Redirects on successful add, renders view otherwise.
	 */
	public function add(int $id = null) {
		$entry = $this->Pages->newEmptyEntity();
		$this->compose($entry);
	}

	/**
	 * Edit method
	 *
	 * @param string|null $id Node Tree id.
	 * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
	 * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
	 */
	public function edit(int $id) {
		$entry = $this->Pages->get($id);
		$this->compose($entry);
	}

	/**
	 * preCompose method
	 *
	 * @param  [type] $entry
	 * @param  [type] ...$params
	 * @return void
	 */
	public function preCompose($entry): void {
		$templates = $this->Pages->Templates->find('list')->where(['template_type' => 0])->all();

		$pages = $this->Pages
			->find('treeList', [
				'spacer' => str_repeat("&nbsp", 3)
			])
			->where(['node_type' => 0])
			->all();

		$pages = $this->Pages->root + $pages->toArray();

		$this->set([
			'entry' => $entry,
			'pages' => $pages,
			'templates' => $templates,
		]);
	}

	/**
	 * Delete method
	 *
	 * @param string|null $id Node Tree id.
	 * @return \Cake\Http\Response|null Redirects to index.
	 * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
	 */
	public function delete(int $id) {
		$this->request->allowMethod(['post', 'delete']);
		$entry = $this->Pages->get($id);

		$this->Pages->removeFromTree($entry);

		if ($this->Pages->delete($entry)) {
			$this->Pages->recover();
			
			if ($this->request->is('htmx')) {
				return $this->response->withStringBody('1');
			}

			$this->Flash->success(__('The Page has been deleted.'), ['plugin' => 'Rhino']);
		} else {
			$this->Flash->error(__('The Page could not be deleted. Please, try again.'), ['plugin' => 'Rhino']);
		}

		return $this->redirect(['action' => 'index']);
	}



	/**
	 * preSave method
	 *
	 * @param  [type] $data
	 * @param  [type] $params
	 * @return void
	 */
	public function preSave($data) {
		$data = parent::preSave($data);

		$data['node_type'] = 0; // Page
		$data['user_id'] = 0; // Page

		return $data;
	}

	public function postSave($entry, $check) {
		if ($check) {
			$this->Flash->success('saved successfully', ['plugin' => 'Rhino']);
			return $this->redirect(['action' => 'index']);
		}

		$this->Flash->error('save failed');
	}

	/**
	 * layout method
	 *
	 * @param  integer $id
	 * @return void
	 */
	public function layout(int $id) {
		Configure::write('layoutMode', true);

		$this->setPlugin(null);

		$page = $this->Pages->get($id, [
			'contain' => ['Templates']
		]);

		$children = $this->Pages->find('children', for: $page->id)
			->find('threaded')
			->contain(['Templates'])
			->all();

		$templates = $this->Pages->Templates->list(1);

		$this->set([
			'page' => $page,
			'children' => $children,
			'templates' => $templates,
			'layoutMode' => true
		]);

		$this->viewBuilder()
			->setLayout($page->template->element);

		try {
			$this->viewBuilder()->setClassName('Rhino.Page');
			return $this->render('Rhino.layout');
		} catch (MissingTemplateException $exception) {
			if (Configure::read('debug')) {
				throw $exception;
			}
			throw new NotFoundException();
		}
	}

	/**
	 * Undocumented function
	 *
	 * @param  integer $id
	 * @return void
	 */
	public function addContent(int $id) {
		$page = $this->Pages->getEntry($id);
		$entry = $this->Contents->newEmptyEntity();

		if ($this->request->is(['patch', 'post', 'put'])) {
			$content = $this->Contents->patchEntity($entry, $this->request->getData());

			if ($this->Pages->save($content)) {
				$this->Flash->success(__('The table has been saved.'), ['plugin' => 'Rhino']);
				return $this->redirect(['action' => 'index']);
			}

			$this->Flash->error(__('The table could not be saved. Please, try again.'), ['plugin' => 'Rhino']);
		}

		$this->set([
			'entry' => $entry,
			'page' => $page,
		]);
	}

	public function savePage() {
		$data = $this->request->getData();
		$ids = array_column($data, 'id');
		$list = $this->Components->find()
			->where(['id IN' => $ids])
			->all()
			->toList();
		$content = $this->Components->patchEntities($list, $data);

		if ($this->Components->saveMany($content)) {
			$response = $this->response->withType('application/json')
				->withStringBody(json_encode([
					'status' => 200,
					'message' => __('The content has been saved.')
				]));
		} else {
			$response = $this->response->withType('application/json')
				->withStringBody(json_encode([
					'status' => 500,
					'message' => __('The content could not be saved. Please, try again.')
				]));
		}

		return $response;
	}

	public function new() {
		$this->viewBuilder()->disableAutoLayout();

		$data = $this->request->getData();

		$component = $this->Components->newEntity([
			'name' => $data['region'],
			'parent_id' => $data['parentId'],
			'content' => '',
			'user_id' => 1,
			'node_type' => 1,
			'template_id' => $this->Components->Templates->find()
				->where(['template_type' => 1])
				->first()
				->id
		]);

		$this->Components->save($component);

		return $this->getElement($component, true);
	}

	public function switch() {
		$this->viewBuilder()->disableAutoLayout();
		$data = $this->request->getData();

		$content = $this->Components->get($data['id']);
		$content = $this->Components->patchEntity($content, $data);
		$this->Components->save($content);
		return $this->getElement($content, true);
	}

	public function remove() {
		$data = $this->request->getData();

		if (!$this->request->is(['patch', 'post', 'put', 'delete'])) {
			return;
		}

		$entry = $this->Components->get($data['id']);

		if ($this->Components->delete($entry)) {
			$response = $this->response->withType('application/json')
				->withStringBody(json_encode([
					'status' => 200,
					'message' => __('The element has been deleted.')
				]));
		} else {
			$response = $this->response->withType('application/json')
				->withStringBody(json_encode([
					'status' => 500,
					'message' => __('The element could not be deleted. Please, try again.')
				]));
		}

		return $response;
	}

	public function toggle() {
		$data = $this->request->getData();
		if (!$this->request->is(['patch', 'post', 'put', 'delete'])) {
			return;
		}

		$entry = $this->Components->get($data['id']);
		$status = $entry->toggle();
		if ($this->Components->save($entry)) {
			return $this->response->withType('application/json')
				->withStringBody(json_encode([
					'status' => 200,
					'message' => __('The element has been toggled.'),
					'active' => $status,
				]));
		}

		return $this->response->withType('application/json')
			->withStringBody(json_encode([
				'status' => 500,
				'message' => __('The element could not toggle.'),
				'active' => $status,
			]));
	}

	public function move() {
		$data = $this->request->getData();
		if (!$this->request->is(['patch', 'post', 'put', 'delete'])) {
			return;
		}

		$entry = $this->Components->get($data['id']);

		switch ($data['direction']) {
			case 'up':
				$this->Components->moveUp($entry);
				break;
			case 'down':
				$this->Components->moveDown($entry);
				break;
		}

		return $this->response->withType('application/json')
			->withStringBody(json_encode([
				'status' => 200,
				'message' => __('The element was moved.'),
			]));
	}

	public function fetchUrl() {
		$Http = new Client();
		$data = $this->request->getQuery();

		$response = $Http->get($data['url'], [], [
			'redirect' => 5,
			'proxy' => [
				'proxy' => 'http://172.22.11.69:8080'
			]
		]);

		if (!$response->isOk()) {
			return $this->response->withType('application/json')
				->withStringBody(json_encode([
					'success' => 0,
				]));
		}

		$html = $response->getStringBody();
		$dom = HTMLDocument::createFromString($html);
		$nodes = $dom->querySelectorAll('meta');

		$headerData = [];
		foreach ($nodes as $key => $node) {
			$name = $node->getAttribute('property') ?? $node->getAttribute('itemprop') ?? $node->getAttribute('name');
			if (!empty($name)) {
				$headerData[$name] = $node->getAttribute('content');
			}
		}

		$meta = [
			'title' => $headerData['title'] ?? $headerData['og:title'] ?? $headerData['twitter:title'],
			'site_name' => parse_url($data['url'])['host'],
			'description' => $headerData['description'] ?? $headerData['og:description'] ?? $headerData['twitter:description'],
			'image' => ['url' => $headerData['image'] ?? $headerData['og:image'] ?? $headerData['twitter:image:src']],
		];

		return $this->response->withType('application/json')
			->withStringBody(json_encode([
				'success' => 1,
				"meta" => $meta,
			]));
	}

	public function uploadFile() {
		$file = $this->request->getData('image');
		$type = $file->getClientMediaType();
		$error = $file->getError();

		if (!preg_match('/^image\/.*/', $type) || $error != 0) {
			return $this->response->withType('application/json')
				->withStringBody(json_encode([
					'success' => 0,
				]));
		}

		$path = join(DS, [$this->basePath, $this->uploadFolder, $file->getClientFilename()]);
		$file->moveTo($path);

		return $this->response->withType('application/json')
			->withStringBody(json_encode([
				'success' => 1,
				'file' => [
					'url' => '/img/' . $file->getClientFilename()
				],
			]));
	}

	public function getFile() {
		$fileName = $this->request->getParam('file');
		$path = join(DS, [$this->basePath, $this->uploadFolder, $fileName]);
		$response = $this->response->withFile($path);

		return $response;
	}

	private function getElement($component, $layoutMode = false) {
		$this->setPlugin(null);

		if ($layoutMode) {
			$this->viewBuilder()->addHelper('Rhino.Layout');
			Configure::write('layoutMode', true);
		}

		$templateId = $component->template_id ?? 1;
		if (empty($component->template)) {
			try {
				$component->template = $this->Components->Templates->get($templateId);
			} catch (\Throwable $th) {
				$component->template = $this->Components->Templates->newEntity(['file' => 'Rhino.template_error']);
			}
		}

		if ($layoutMode) {
			$templates = $this->Components->Templates->list(1);
			$this->set(['templates' => $templates]);
		}

		$this->set([
			'component' => $component,
			'layoutmode' => $layoutMode
		]);

		try {
			return $this->render('Rhino.element');
		} catch (MissingTemplateException $exception) {
			if (Configure::read('debug')) {
				throw $exception;
			}

			throw new NotFoundException();
		}
	}
}
