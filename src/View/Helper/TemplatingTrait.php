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
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link          https://cakephp.org CakePHP(tm) Project
 * @since         3.0.0
 * @license       https://opensource.org/licenses/mit-license.php MIT License
 */
namespace Rhino\View\Helper;

/**
 * Adds string template functionality to any class by providing methods to
 * load and parse string templates.
 *
 * This trait requires the implementing class to provide a `config()`
 * method for reading/updating templates. An implementation of this method
 * is provided by `Cake\Core\InstanceConfigTrait`
 */
trait TemplatingTrait {
	private function loadElement($element, $options = []) {
		try {
			return $this->_View->element($element, $options);
		} catch (\Throwable $th) {
			return $this->_View->element('Rhino.' . $element, $options);
		}
	}

	private function loadTemplate(string $name, string $element, array $options = []): void {
		$this->setTemplates([
			$name => $this->loadElement($element, $options)
		]);
	}

	private function renderTemplate(string $name, string $content = '', array $attrs = [], array $data = []): string {
		return $this->formatTemplate($name, array_merge([
			'attrs' => $this->templater()->formatAttributes($attrs),
			'content' => $content,
		], $data));
	}
}