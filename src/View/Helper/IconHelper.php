<?php
/* src/View/Helper/LinkHelper.php */

namespace Rhino\View\Helper;

use Cake\View\Helper;
use Generator;
use Cake\Core\App;
use Cake\View\Exception\MissingElementException;
use LogicException;
use Throwable;
use Cake\Core\Plugin;

class IconHelper extends Helper {

	/**
	 * Other Helpers
	 */
	protected array $helpers = [
		'Url',
		'Html',
		'Form',
	];

	/**
	 * Constant for view file type 'element'
	 *
	 * @var string
	 */
	public const TYPE_ELEMENT = 'icon';

	/**
	 * File extension. Defaults to ".php".
	 *
	 * @var string
	 */
	protected string $_ext = '.svg';

	/**
	 * An array of variables
	 *
	 * @var array<string, mixed>
	 */
	protected array $viewVars = [];

	/**
	 * Generates SVG in the HTML form a file
	 * 
	 * @param string $name		The name of the file excluding the file-ending, should be located in /webroot/icon/{file}.svg
	 * @param array $data		Additional data
	 * @param array $options	e.g. ['ignoreMissing']
	 * @throws \Cake\View\Exception\MissingElementException
	 * @return string
	 */
	public function svg(string $name, array $data = [], array $options = []): string {
		$options += [
			'callbacks' => false,
			'cache' => null,
			'plugin' => null,
			'ignoreMissing' => false
		];

		$pluginCheck = $options['plugin'] !== false;

		$file = $this->_getElementFileName($name, $pluginCheck);
	
		if ($file) {
			return $this->_render($file, $data);
		}

		if ($options['ignoreMissing']) {
			return '';
		}

		
		[$plugin, $elementName] = $this->getView()->pluginSplit($name, $pluginCheck);
		
		$paths = iterator_to_array($this->getElementPaths($plugin));

		throw new MissingElementException([$name . $this->_ext, $elementName . $this->_ext], $paths);
	}

	/**
	 * Creates a button with an icon in it.
	 * Adds an alt-text for screen-readers and a title to the button.
	 * 
	 * @param string $name		The Name of the Icon file, excluding the ending 
	 * @param string $label		The Explanation text (alt-text)
	 * @param array $data		Additional data for the button e.g. ['type' => 'submit]
	 * @return string			html
	 */
	public function button(string $name, string $label, array $data = []): string {
		$svg = $this->svg($name);

		if (isset($data['label']) && !$data['label']) {
			$data['title'] = $label;
			$labelSpan = $this->Html->tag('span', $label, ['class' => 'sr-only']);
		} else {
			$labelSpan = $this->Html->tag('span', $label);
		}

		if (isset($data['class'])) {
			$data['class'] .= ' icon-link';
		} else {
			$data['class'] = 'icon-link';
		}

		// Cake uses type=submit by default
		if (!isset($data['type'])) {
			$data['type'] = 'button';
		}

		$content = "{$svg}{$labelSpan}";
		if (isset($data['reverse']) && $data['reverse']) {
			$content = "{$labelSpan}{$svg}";
		}
		unset($data['reverse']);

		$data['escape'] = false;
		$data['escapeTitle'] = false;

		return $this->Form->button($content, $data);
	}

	/**
	 * Creates a link with an icon in it.
	 * Adds an alt-text for screen-readers and a title to the button.
	 * 
	 * @param string $name		The Name of the Icon file, excluding the ending 
	 * @param string $label		The Explanation text (alt-text)
	 * @param array $data		Additional data for the button e.g. ['type' => 'submit]
	 * @return string			html
	 */
	public function link(string $name, string $label, mixed $url,  array $data = []): string {
		$svg = $this->svg($name);

		if (isset($data['label']) && !$data['label']) {
			$data['title'] = $label;
			$labelSpan = $this->Html->tag('span', $label, ['class' => 'sr-only']);
		} else {
			$labelSpan = $this->Html->tag('span', $label);
		}

		if (isset($data['class'])) {
			$data['class'] .= ' icon-link';
		} else {
			$data['class'] = 'icon-link';
		}

		$content = "{$svg}{$labelSpan}";
		if (isset($data['reverse']) && $data['reverse']) {
			$content = "{$labelSpan}{$svg}";
		}
		unset($data['reverse']);

		$data['escape'] = false;
		$data['escapeTitle'] = false;

		return $this->Html->link($content, $url, $data);
	}

	/**
	 * Creates a link with an icon in it.
	 * Adds an alt-text for screen-readers and a title to the button.
	 * 
	 * @param string $name		The Name of the Icon file, excluding the ending 
	 * @param string $label		The Explanation text (alt-text)
	 * @param array $data		Additional data for the button e.g. ['type' => 'submit]
	 * @return string			html
	 */
	public function postLink(string $name, string $label, mixed $url, array $data = []): string {
		$svg = $this->svg($name);

		if (isset($data['label']) && !$data['label']) {
			$data['title'] = $label;
			$labelSpan = $this->Html->tag('span', $label, ['class' => 'sr-only']);
		} else {
			$labelSpan = $this->Html->tag('span', $label);
		}

		if (isset($data['class'])) {
			$data['class'] .= ' icon-link';
		} else {
			$data['class'] = 'icon-link';
		}

		$content = "{$svg}{$labelSpan}";
		if (isset($data['reverse']) && $data['reverse']) {
			$content = "{$labelSpan}{$svg}";
		}
		unset($data['reverse']);
		
		$data['escape'] = false;
		$data['escapeTitle'] = false;

		return $this->Form->postLink($content, $url, $data);
	}

	/**
	 * Finds an element filename, returns false on failure.
	 *
	 * @param string $name The name of the element to find.
	 * @param bool $pluginCheck - if false will ignore the request's plugin if parsed plugin is not loaded
	 * @return string|false Either a string to the element filename or false when one can't be found.
	 */
	protected function _getElementFileName(string $name, bool $pluginCheck = true): string|false {
		[$plugin, $name] = $this->getView()->pluginSplit($name, $pluginCheck);

		$name .= $this->_ext;

		
		foreach ($this->getElementPaths($plugin) as $path) {
			if (is_file($path . $name)) {
				return $path . $name;
			}
		}

		return false;
	}

	/**
	 * Get an iterator for element paths.
	 *
	 * @param string|null $plugin The plugin to fetch paths for.
	 * @return \Generator
	 */
	protected function getElementPaths(?string $plugin): Generator {
		$paths = $this->getPluginPath($plugin);
		
		$paths = array_merge(
			[''],
			[$paths],
			App::core('webroot')
		);

		foreach ($paths as $path) {
			foreach (["icon"] as $subdir) {
				yield $path . $subdir . DIRECTORY_SEPARATOR;
			}
		}
	}

	private function getPluginPath(?string $pluginName): string {

		if (empty($pluginName)) {
			// return WWW_ROOT;
			return '';
		}

		return Plugin::path($pluginName) . 'webroot' . DS ;
	}


	/**
	 * Renders and returns output for given template filename with its
	 * array of data. Handles parent/extended templates.
	 *
	 * @param string $templateFile Filename of the template
	 * @param array $data Data to include in rendered view. If empty the current
	 *   View::$viewVars will be used.
	 * @return string Rendered output
	 * @throws \LogicException When a block is left open.
	 * @triggers View.beforeRenderFile $this, [$templateFile]
	 * @triggers View.afterRenderFile $this, [$templateFile, $content]
	 */
	protected function _render(string $templateFile, array $data = []): string {
		if (empty($data)) {
			$data = $this->viewVars;
		}

		$content = $this->_evaluate($templateFile, $data);
	
		return $content;
	}

	/**
	 * Sandbox method to evaluate a template / view script in.
	 *
	 * @param string $templateFile Filename of the template.
	 * @param array $dataForView Data to include in rendered view.
	 * @return string Rendered output
	 */
	protected function _evaluate(string $templateFile, array $dataForView): string {
		extract($dataForView);

		$bufferLevel = ob_get_level();
		ob_start();

		try {
			// Avoiding $templateFile here due to collision with extract() vars.
			include func_get_arg(0);
		} catch (Throwable $exception) {
			while (ob_get_level() > $bufferLevel) {
				ob_end_clean();
			}

			throw $exception;
		}

		return (string)ob_get_clean();
	}
}
