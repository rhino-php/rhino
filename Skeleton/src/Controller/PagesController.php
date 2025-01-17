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
namespace App\Controller;

use Rhino\Controller\PagesController as BaseController;

/**
 * Static content controller
 *
 * This controller will render views from templates/Pages/
 *
 * @link https://book.cakephp.org/4/en/controllers/pages-controller.html
 */
class PagesController extends BaseController {
	public function initialize(): void {
		parent::initialize();
	}
	
	/**
	 * Called when editing a Page in Layout Mode
	 * @param int $id
	 * 
	 * @return void
	 */
	public function layout(int $id) {
		parent::layout($id);
	}

	/**
	 * Called to display a Page or Template
	 * @param string[] $path
	 * 
	 * @return void
	 */
	public function display(string ...$path) {
		parent::display(...$path);
	}
	
	/**
	 * Called when getting an Image
	 * 
	 * @return void
	 */
	public function getFile() {
		parent::getFile();
	}
}
