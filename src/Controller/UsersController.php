<?php
declare(strict_types=1);

namespace Rhino\Controller;

use Rhino\Controller\RhinoController;
use Cake\Http\Exception\ForbiddenException;

/**
 * Users Controller
 *
 * @property \Rhino\Model\Table\UsersTable $Users
 * @method \Rhino\Model\Entity\User[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class UsersController extends RhinoController
{
    
	public function beforeFilter(\Cake\Event\EventInterface $event) {
		parent::beforeFilter($event);
		// Configure the login action to not require authentication, preventing
		// the infinite redirect loop issue
		$this->Authentication->addUnauthenticatedActions(['login', 'new']);
	}
	
	/**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $users = $this->paginate($this->Users);
        $this->set(compact('users'));
    }

    /**
     * View method
     *
     * @param string|null $id User id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null) {
        $user = $this->Users->get($id, contain: ['Articles']);

        $this->set(compact('user'));
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null|void Redirects on successful add, renders view otherwise.
     */
    public function add() {
        $user = $this->Users->newEmptyEntity();
		$this->compose($user, [
			'entity' => 'user',
			'success' => __('The user has been saved.'),
			'error' => __('The user could not be saved. Please, try again.')
		]);
    }

    /**
     * Edit method
     *
     * @param string|null $id User id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null) {
        $user = $this->Users->get($id, contain: ['Roles']);
		$this->compose($user, [
			'entity' => 'user',
			'success' => __('The user has been saved.'),
			'error' => __('The user could not be saved. Please, try again.')
		]);
    }

	public function preCompose($user, ...$params) {
		$roles = [];
		$_roles = $this->Users->Roles->find()->select(['id', 'name'])->all();
		
		foreach ($_roles as $role) {
			$roles[$role['id']] = $role['name'];
		}

		$role = $this->user->role_id;
		$this->set(compact('role', 'roles'));
		return $user;
	}

	// public function preSave($data, $params) {
	// 	if ($data['newPassword'] === $data['repeatPassword']) {
	// 		if (!empty($data['newPassword'])) {
	// 			$data['password'] = $data['newPassword'];
	// 		} else {
	// 			unset($data['password']);
	// 		}
	// 		return $data;
	// 	}
		
	// 	$this->Flash->error(__('Password does not match.'), ['plugin' => 'Rhino']);
	// 	$data['password'] = false;
	// 	return $data;
	// }

    /**
     * Delete method
     *
     * @param string|null $id User id.
     * @return \Cake\Http\Response|null|void Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null) {
        $this->request->allowMethod(['post', 'delete']);
        $user = $this->Users->get($id);
        if ($this->Users->delete($user)) {
            $this->Flash->success(__('The user has been deleted.'), ['plugin' => 'Rhino']);
        } else {
            $this->Flash->error(__('The user could not be deleted. Please, try again.'), ['plugin' => 'Rhino']);
        }

        return $this->redirect(['action' => 'index']);
    }

	public function login() {
		$this->Authorization->skipAuthorization();

		$userCount = $this->Users->find()->count('*');
		
		if ($userCount === 0) {
			return $this->redirect(['action'=> 'new']);
		}
		

		$this->viewBuilder()->setLayout('blank');
		
		$this->request->allowMethod(['get', 'post']);
		$result = $this->Authentication->getResult();
		// regardless of POST or GET, redirect if user is logged in
		if ($result && $result->isValid()) {
			// redirect to /articles after login success
			$redirect = $this->request->getQuery('redirect', [
				'controller' => 'Overview',
				'action' => 'display',
				'home'
			]);
			
			return $this->redirect($redirect);
		}
		// display error if user submitted and authentication failed
		if ($this->request->is('post') && !$result->isValid()) {
			$this->Flash->error(__('Invalid username or password'), ['plugin' => 'Rhino']);
		}
	}

	public function logout() {
		$this->Authorization->skipAuthorization();
		$result = $this->Authentication->getResult();
		// regardless of POST or GET, redirect if user is logged in
		if ($result && $result->isValid()) {
			$this->Authentication->logout();
			return $this->redirect(['controller' => 'Users', 'action' => 'login']);
		}
	}

	public function new() {
		$this->Authorization->skipAuthorization();
		$this->viewBuilder()->setLayout('blank');

		$count = $this->Users->find('all')->count();
		if ($count > 0) {
			throw new ForbiddenException('Admin User already set.');
		}

		$user = $this->Users->newEmptyEntity();
		
		$this->request->allowMethod(['get', 'post']);
		if ($this->request->is(['post'])) {
			$data = $this->request->getData();
			$user = $this->Users->patchEntity($user, $data);

			if ($this->Users->save($user)) {
				$this->Flash->success(__('The user has been created.'));
				return $this->redirect(['action' => 'index']);
			}

			$this->Flash->error(__('The user could not be saved. Please, try again.'));
		}

		$this->set(compact('user'));
	}
}
