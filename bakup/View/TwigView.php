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
use Cake\TwigView\View\TwigView as BaseView;

/**
 * Application View
 *
 * Your application's default view class
 *
 * @link https://book.cakephp.org/4/en/views.html#the-app-view
 */
class TwigView extends BaseView
{
	protected array $extensions = [
		'.twig',
		'.html',
	];
	/**
	 * Initialization hook method.
	 *
	 * Use this method to add common initialization code like adding helpers.
	 *
	 * e.g. `$this->addHelper('Html');`
	 *
	 * @return void
	 */
	public function initialize(): void
	{
		parent::initialize();
		$this->loadHelper('Authentication.Identity');
		$this->loadHelper('Rhino.Icon');
		$this->loadHelper('Rhino.Menu');
		$this->loadHelper('Rhino.Rhino');

		Configure::load('app', 'default', true);
		$local = Configure::read('App.defaultLocale');
		$this->set(compact("local"));
	}
}
