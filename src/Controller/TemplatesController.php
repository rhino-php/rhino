<?php
declare(strict_types=1);

namespace Rhino\Controller;

use Rhino\Controller\RhinoController as BaseController;

/**
 * Templates Controller
 *
 * @property \Rhino\Model\Table\TemplatesTable $Templates
 * @property \Authorization\Controller\Component\AuthorizationComponent $Authorization
 */
class TemplatesController extends BaseController {
	private bool $authorize = false;

	/**
	 * Initialize controller
	 *
	 * @return void
	 */
	public function initialize(): void {
		parent::initialize();
		$this->composeTemplate = 'Rhino.compose';
		$this->loadComponent('Authorization.Authorization');
	}

	public function beforeFilter(\Cake\Event\EventInterface $event) {
		parent::beforeFilter($event);

		if ($this->components()->has('Authorization')) {
			$this->authorize = true;
		}

		if ($this->components()->has('FormProtection')) {
			$this->FormProtection->setConfig('unlockedActions', [
				'delete',
			]);
		}
	}

	/**
	 * Index method
	 *
	 * @return \Cake\Http\Response|null|void Renders view
	 */
	public function index() {
		$query = $this->Templates->find();
		if ($this->authorize) {
			$this->Authorization->authorize($query);
		}

		$templates = $this->paginate($query);
		$this->set(compact('templates'));
		$this->setPlugin(null);
		return $this->render('Rhino.index');
	}

	/**
	 * View method
	 *
	 * @param string|null $id Template id.
	 * @return \Cake\Http\Response|null|void Renders view
	 * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
	 */
	public function view($id = null) {
		$template = $this->Templates->get($id);
		if ($this->authorize) {
			$this->Authorization->authorize($template);
		}

		$this->set(compact('template'));
		$this->set('templateTypes', $this->templateTypes);
		$this->setPlugin(null);
		return $this->render('Rhino.view');
	}

	/**
	 * Add method
	 *
	 * @return \Cake\Http\Response|null|void Redirects on successful add, renders view otherwise.
	 */
	public function add() {
		$template = $this->Templates->newEmptyEntity();
		if ($this->authorize) {
			$this->Authorization->authorize($template);
		}

		$this->compose($template);
	}

	/**
	 * Edit method
	 *
	 * @param string|null $id Template id.
	 * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
	 * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
	 */
	public function edit($id = null) {
		$template = $this->Templates->get($id, contain: []);
		if ($this->authorize) {
			$this->Authorization->authorize($template);
		}

		$this->compose($template);
	}

	/**
	 * preCompose method
	 *
	 * @param  [type] $entry
	 * @param  [type] ...$params
	 * @return void
	 */
	public function preCompose($template): void {
		$this->set(compact('template'));
		$this->set('templateTypes', $this->templateTypes);
		$this->setPlugin(null);
	}


	public function postSave($entry, $check) {
		if ($check) {
			$this->Flash->success(__('The template has been saved.'));

			return $this->redirect(['action' => 'index']);
		}

		$this->Flash->error(__('The template could not be saved. Please, try again.'));
	}

	/**
	 * Delete method
	 *
	 * @param string|null $id Template id.
	 * @return \Cake\Http\Response|null Redirects to index.
	 * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
	 */
	public function delete($id = null) {
		$this->request->allowMethod(['post', 'delete']);
		$template = $this->Templates->get($id);
		if ($this->authorize) {
			$this->Authorization->authorize($template);
		}

		if ($this->Templates->delete($template)) {
			if ($this->request->is('htmx')) {
				return $this->response->withStringBody('1');
			}

			$this->Flash->success(__('The template has been deleted.'));
		} else {
			$this->Flash->error(__('The template could not be deleted. Please, try again.'));
		}

		return $this->redirect(['action' => 'index']);
	}
}
