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

use Rhino\Handlers\FileHandler;
use Rhino\Controller\RhinoController as BaseController;

/**
 * Static content controller
 *
 * This controller will render views from templates/Pages/
 *
 * @link https://book.cakephp.org/4/en/controllers/pages-controller.html
 */
class FilesController extends BaseController {

	public function initialize(): void {
		parent::initialize();
		$this->Files = new FileHandler();

		if ($this->request->getQuery('modal')) {
			$this->viewBuilder()->disableAutoLayout();
		}
	}

	public function get() {
		$directory = $this->request->getQuery('dir');
		$types = $this->request->getQuery('types');

		if (!empty($types)) {
			$types = explode(',', $types);
		}

		$dirs = $this->Files->get($directory, $types ?? []);
		$this->set(compact('dirs'));
	}
}
