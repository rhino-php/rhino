<?php
declare(strict_types=1);

namespace Rhino\Controller;

use Rhino\Controller\RhinoController;
use Rhino\Model\Table\GroupsTable;

/**
 * Tables Controller
 *
 * @method \Rhino\Model\Entity\Table[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class ApplicationsController extends RhinoController {

	public function initialize(): void {
		parent::initialize();
	}

	/**
	 * Index method
	 *
	 * @return \Cake\Http\Response|null|void Renders view
	 */
	public function index() {
		$groups = $this->Applications->Groups->getGroups();
		$ungrouped = $this->Applications->find()->where(['rhino_group_id IS' => Null])->all();
		
		$unknown = $this->Applications->getUnknown();
		
		if (!empty($unknown)) {
			$ungrouped = $ungrouped->append($unknown);
		}


		if (!$ungrouped->isEmpty()) {
			$group = $this->Applications->Groups->newEntity([
				"name" => "Ungrouped",
			]);
			$group->applications = $ungrouped;
			$groups = $groups->appendItem($group);
		}

		$rhinoTables = $this->Applications->tableBlackList;

		$this->set(compact('groups', 'rhinoTables'));
	}

	/**
	 * View method
	 *
	 * @param string|null $id Rhino Media id.
	 * @return \Cake\Http\Response|null|void Renders view
	 * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
	 */
	public function view(string $name = null) {
		$data = $this->Applications->getByName($name, ['contain' => 'Fields']);
		$this->set(compact('data'));
	}

	/**
	 * Add method
	 *
	 * @return \Cake\Http\Response|null|void Redirects on successful add, renders view otherwise.
	 */
	public function add() {

		$entry = $this->Applications->newEmptyEntity();

		$this->compose($entry, [
			'success' => __('The table has been saved.'),
			'error' => __('The table could not be saved. Please, try again.')
		]);
	}

	/**
	 * Edit method
	 *
	 * @param string|null $id Table id.
	 * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
	 * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
	 */
	public function edit(string $name = null) {
		$entry = $this->Applications->getByName($name);

		if (!$entry) {
			$entry = $this->Applications->newEmptyEntity();
			$entry['name'] = $name;
		}

		$this->set([
			"tableName" => $name
		]);

		$this->compose($entry, [
			'success' => __('The table has been saved.'),
			'error' => __('The table could not be saved. Please, try again.')
		]);
	}

	public function preCompose($entry, ...$params) {
		$tableName = $params[0] ?? null;

		$groups = $this->Applications->Groups->getGroupNames();

		if (!empty($tableName) && $entry->has_table) {
			$appFields = $this->FieldHandler->listColumns($tableName);
			$this->set([
				"appFields" => $this->setValueAsKey($appFields)
			]);
		}

		$this->set([
			'groups' => $this->addEmptyOption($groups),
		]);

		return $entry;
	}

	public function preSave($data, $params) {
		if ($params['action'] == "edit" && (isset($data['has_table']) && $data['has_table'])) {
			if ($data['name'] != $data['currentName']) {
				$this->Applications->rename($data["currentName"], $data["name"]);
			}
		}

		if ($params['action'] == "edit" && isset($data["has_table"])) {
			unset($data["has_table"]);
		}

		if ($params['action'] == "add" && $data['has_table']) {
			$applications = $this->Applications->getList();
			if (in_array($data['name'], $applications)) {
				$this->Flash->error(__('The table ' . $data['name'] . ' already exists.'), ['plugin' => 'Rhino']);
				return;
			}

			$this->Applications->create($data["name"]);
		}

		return $data;
	}

	public function newGroup() {
		if ($this->request->is(['patch', 'post', 'put'])) {
			$entry = $this->Applications->Groups->newEmptyEntity();
			$group = $this->Applications->Groups->patchEntity($entry, $this->request->getData());

			if ($this->Applications->Groups->save($group)) {
				$this->Flash->success(__('The table has been saved.'), ['plugin' => 'Rhino']);

				return $this->redirect(['action' => 'index']);
			}

			$this->Flash->error(__('The table could not be saved. Please, try again.'), ['plugin' => 'Rhino']);
		}
	}

	public function renameGroup($id) {
		$entry = $this->Applications->Groups->get($id);

		if ($this->request->is(['patch', 'post', 'put'])) {
			$group = $this->Applications->Groups->patchEntity($entry, $this->request->getData());

			if ($this->Applications->Groups->save($group)) {
				$this->Flash->success(__('The table has been saved.'), ['plugin' => 'Rhino']);

				return $this->redirect(['action' => 'index']);
			}

			$this->Flash->error(__('The table could not be saved. Please, try again.'), ['plugin' => 'Rhino']);
		}

		$this->set(['entity' => $entry]);
	}

	public function deleteGroup($id) {
		$entry = $this->Applications->Groups->get($id);

		if ($this->Applications->Groups->delete($entry)) {
			$this->Flash->success(__('The user has been deleted.'), ['plugin' => 'Rhino']);
		} else {
			$this->Flash->error(__('The user could not be deleted. Please, try again.'), ['plugin' => 'Rhino']);
		}

		return $this->redirect(['action' => 'index']);
	}

	/**
	 * Delete method
	 *
	 * @param string|null $id Table id.
	 * @return \Cake\Http\Response|null|void Redirects to index.
	 * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
	 */
	public function delete(string $tableName) {
		$entry = $this->Applications->getByName($tableName);
		if ($entry) {
			$this->Applications->delete($entry);
		}
		$this->Applications->drop($tableName);
		return $this->redirect(['action' => 'index']);
	}

	public function createTable() {
		$this->Tables->createTable();
		return $this->redirect(['action' => 'index']);
	}
}
