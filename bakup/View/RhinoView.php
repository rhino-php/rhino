<?php
declare(strict_types=1);

/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link      https://cakephp.org CakePHP(tm) Project
 * @since     3.0.0
 * @license   https://opensource.org/licenses/mit-license.php MIT License
 */
namespace Rhino\View;

use Cake\Core\Configure;
use Cake\View\View;
use Rhino\Model\Table\ApplicationsTable;
use Cake\ORM\TableRegistry;

/**
 * Application View
 *
 * Your application's default view class
 *
 * @link https://book.cakephp.org/4/en/views.html#the-app-view
 */
class RhinoView extends View {
	/**
	 * Initialization hook method.
	 *
	 * Use this method to add common initialization code like loading helpers.
	 *
	 * e.g. `$this->loadHelper('Html');`
	 *
	 * @return void
	 */
	public function initialize(): void {
		parent::initialize();
		$this->loadHelper('Authentication.Identity');
		$this->loadHelper('Rhino.Icon');
		$this->loadHelper('Rhino.Menu');
		$this->loadHelper('Rhino.Rhino');


		Configure::load('app', 'default', true);
		$local = Configure::read('App.defaultLocale');

		$theme = Configure::read('rhino-theme') ?? 'Rhino.main';
		$icon = Configure::read('rhino-icon') ?? 'Rhino.rhino';
		$iconBig = Configure::read('rhino-icon-big') ?? 'Rhino.rhino-big';

		$title = $this->get('title');
		if (isset($title) && !empty($title)) {
			$this->assign('title', $title);
		}

		$this->app = $this->getApplication();

		$this->set(compact("local", "theme", "icon", 'iconBig'));
	}

	public function getApplication() {
		$appName = $this->get('_app');
		$this->controller = $this->request->getParam('controller');
		$this->action = $this->request->getParam('action');
		$this->appName = $appName ?? $this->controller;

		$Applications = new ApplicationsTable();
		$app = $Applications->getByName($this->appName);

		if (isset($app->has_table) && $app->has_table) {
			$this->setTable($this->appName);
			
			$app->overView = match(true) {
				isset($app->overviewConfig) => $app->overviewConfig,
				isset($this->Table->overView) => $this->Table->overView,
				true => null
			};

			$app->fieldConfig = match (true) {
				isset($app->fieldConfig) => $app->fieldConfig,
				isset($this->Table->fieldConfig) => $this->Table->fieldConfig,
				true => null
			};

			$app->detailView = match (true) {
				isset($app->detailView) => $app->detailView,
				isset($this->Table->detailView) => $this->Table->detailView,
				true => null
			};
		}

		return $app;
	}

	public function setTable($tableName) {
		$tableLocator = TableRegistry::getTableLocator();
		$alias = ucfirst($tableName);

		if (preg_match('/^rhino\_(.*)/', $tableName, $matches)) {
			$alias = 'Rhino.' . ucfirst($matches[1]);
		}

		try {
			$this->Table = $tableLocator->get($alias);
		} catch (\Throwable $th) {
			$this->Table = TableRegistry::getTableLocator()->get('Rhino.Tables');
			$this->Table->setTable($tableName);
		}
	}
}
