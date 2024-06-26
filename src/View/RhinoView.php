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
class RhinoView extends View
{
    /**
     * Initialization hook method.
     *
     * Use this method to add common initialization code like loading helpers.
     *
     * e.g. `$this->loadHelper('Html');`
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
		
		$theme = Configure::read('rhino-theme') ?? 'Rhino.main';
		$icon = Configure::read('rhino-icon') ?? 'Rhino.rhino';
		$iconBig = Configure::read('rhino-icon-big') ?? 'Rhino.rhino-big';

		$title = $this->get('title');
		if (isset($title) && !empty($title)) {
			$this->assign('title', $title);
		}

		$this->set(compact("local", "theme", "icon", 'iconBig'));
    }
}
