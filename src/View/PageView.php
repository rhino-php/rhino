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

/**
 * Application View
 *
 * Your application's default view class
 *
 * @link https://book.cakephp.org/4/en/views.html#the-app-view
 */
class PageView extends View {
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
		Configure::load('app', 'default', true);
		$local = Configure::read('App.defaultLocale');
		$this->set(compact("local"));

		$isLayout = Configure::read('layoutMode');
		$title = $this->get('pageTitle', $this->name);

		$this->assign('title', $title);

		$this->loadHelper('Authentication.Identity');
		$this->loadHelper('Rhino.Icon');
		$this->loadHelper('Rhino.Menu');
		$this->loadHelper('Rhino.Rhino');
		$this->loadHelper('Rhino.Layout');

		if ($isLayout) {
			$pass = $this->request->getParam('pass');
			$pageId = $pass[0];

			$this->append('meta', $this->Html->meta('csrfToken', $this->request->getAttribute('csrfToken')));
			$this->append('meta', $this->Html->meta('pageId', (string) $pageId));
			$this->append('script', $this->Html->script(['Rhino.layout'], ["type" => "module"]));
			$this->append('css', $this->Html->css('Rhino.layout'));
			$this->assign('Rhino', $this->element('Rhino.layout-menu'));
		}

		$children = $this->get('children');
		if (!empty($children)) {
			foreach ($this->get('children') as $component) {
				if (empty($component->template) || $component->node_type != 1)
					continue;

				if ($component->active || $isLayout) {
					$region = $component->name;
					$content = $this->Rhino->component($component);
					$this->append($region, $content);
				}
			}
		}
	}
}
