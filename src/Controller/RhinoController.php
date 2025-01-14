<?php
declare(strict_types=1);

namespace Rhino\Controller;

use App\Controller\AppController as BaseController;
use Rhino\Handlers\FieldHandler;
use Cake\Http\Response;
use Rhino\Model\Table\ApplicationsTable;
use Rhino\Model\ApplicationTrait;
use Rhino\Model\Table\RolesTable;
use Rhino\Handlers\FilterHandler;
use Cake\ORM\Exception\MissingTableClassException;

class RhinoController extends BaseController {

	public string $composeTemplate = 'compose';

	public function initialize(): void
    {
        parent::initialize();
		$this->mountTable();
	}

	public function mountTable() {
		try {
			$this->Table = $this->fetchTable($this->defaultTable);
			$this->useTable = true;
		} catch (\Throwable $th) {
			try {
				$this->Table = $this->fetchTable('Rhino.' . $this->defaultTable);
				$this->useTable = true;
			} catch (\Throwable $th) {
				$this->useTable = false;
			}
		}
	}
	
	/**
	 * compose
	 * 
	 * route the add and edit to the same template and handel save.
	 * use preCompose for shared operations, and preSave for operations before save.
	 * 
	 *
	 * @param  object $entry
	 * @param  array  $params
	 * @return Cake\Http\Response
	 */
	public function compose(object $entry, array $params = []) {
		$this->set([
			'action' => $this->request->getAttribute('action'),
		]);

		if (method_exists($this, 'preCompose')) {
			$return = $this->preCompose($entry);
			if (!empty($return)) {
				$entry = $return;
			}
		}

		if ($this->request->is(['patch', 'post', 'put'])) {
			$data = $this->request->getData();
			$this->save($entry, $params, $data);
		}

		try {
			return $this->render($this->composeTemplate);
		} catch (MissingTemplateException $exception) {
			if (Configure::read('debug')) {
				throw $exception;
			}
			throw new NotFoundException();
		}
	}


	/**
	 * save
	 *
	 * @param  object $entry
	 * @param  array  $params
	 * @param  array  $data
	 * @return void
	 */
	public function save(object $entry, array $params, array $data) {
		if (method_exists($this, 'preSave')) {
			$data = $this->preSave($data, $params);

			if ($data == false) {
				return false;
			}
		}

		$entry = $this->Table->patchEntity($entry, $data);
		$check = $this->Table->save($entry);

		if (method_exists($this, 'postSave')) {
			$this->postSave($entry, $check);
		}
	}

	/**
	 * preCompose
	 * 
	 * Shared function between add and edit.
	 *
	 * @param  object $entity
	 * @return void|object
	 */
	// Todo: should probably be an Event
	public function preCompose(object $entity) {
		return null;
	}

	/**
	 * preSave
	 * 
	 * Shared save Operations.
	 *
	 * @param  array $data
	 * @return array
	 */
	public function preSave(array $data) {
		return $data;
	}

	/**
	 * preSave
	 * 
	 * Shared save Operations.
	 *
	 * @param  object $entity
	 * @param  bool $check
	 */
	public function postSave(array $entity, bool $check) {
	}
}