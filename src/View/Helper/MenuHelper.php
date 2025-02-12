<?php
/* src/View/Helper/LinkHelper.php */

namespace Rhino\View\Helper;

use Cake\View\Helper;
use Rhino\Model\Table\PagesTable;
use Cake\View\StringTemplateTrait;
use Rhino\View\Helper\TemplatingTrait;
use Generator;
use Cake\Core\App;
use Cake\View\Exception\MissingElementException;
use LogicException;
use Throwable;
use Cake\Core\Plugin;

class MenuHelper extends Helper {
	use StringTemplateTrait;
	use TemplatingTrait;

	/**
     * Default config for this class
     *
     * @var array<string, mixed>
     */
    protected array $_defaultConfig = [
        'templates' => [
			'tag' => '<{{tag}}{{attrs}}>{{content}}</{{tag}}>',
			'ul' => '<ul{{attrs}}>{{content}}</ul>',
			'li' => '<li{{attrs}}>{{content}}</li>',
			'link' => '<a href="{{url}}"{{attrs}}>{{content}}</a>',
			'summary' => '<summary{{attrs}}>{{content}}</summary>',
			'details' => '<details{{attrs}}>{{content}}</details>',
		]
	];

	/**
	 * List of helpers used by this helper
	 *
	 * @var array
	 */
	protected array $helpers = ['Url'];

	private ?int $maxLevel = null; 

	public function initialize(array $config): void {
		$this->loadTemplate('toggleButton', 'Menu/toggleButton');
	}

	public function toggleButton(string $content = 'Toggle Button', array $attributes = []): string {
		$defaults = [
			'id' => 'menu-button',
			'class' => 'menu__button button',
			'aria-expanded' => 'false',
		];

		return $this->renderTemplate(
			name: 'toggleButton',
			content: $content,
			attrs: array_merge($defaults, $attributes)
		);
	}

	public function fetch($options = []) {
		$menu = $this->_View->fetch('menu');
		
		if (!isset($options['class'])) {
			$options['class'] = 'menu-list';
		}

		$list = $this->formatTemplate('ul', [
			'attrs' => $this->templater()->formatAttributes($options),
			'content' => $menu,
		]);

		return $this->formatTemplate('tag', [
			'attrs' => $this->templater()->formatAttributes(['id' => 'main-menu', 'class' => 'menu']),
			'content' => $list,
			'tag' => 'nav',
		]);
	}

	public function set(?int $root = null, ?array $options = []) {
		$this->Pages = new PagesTable();
		$menu = $this->Pages->getMenu($root, $options['limit'] ?? null);
		unset($options['limit']);
		$out = $this->nestedList($menu, $options, true);
		$this->_View->append('menu', $out);
	}

	public function get(?int $root = null, ?array $options = []) {
		$this->set($root, $options);
		$menu = $this->_View->fetch('menu');
		
		$listOptions = isset($options['list']) ? $options['list'] : [];
		if (!isset($listOptions['class'])) {
			$listOptions['class'] = 'menu-list';
		}

		return $this->formatTemplate('ul', [
			'attrs' => $this->templater()->formatAttributes($listOptions),
			'content' => $menu,
		]);
	}

	private function nestedList($items, array $options = [], bool $first = false) {
		$out = '';

		foreach ($items as $item) {
			$out .= $this->nestedItem($item, $options);
		}

		$listOptions = isset($options['list']) ? $options['list'] : [];
		if (!isset($listOptions['class'])) {
			$listOptions['class'] = 'menu-list';
		}
		
		if ($first) {
			return $out;
		}

		return $this->formatTemplate('ul', [
			'attrs' => $this->templater()->formatAttributes($listOptions),
			'content' => $out,
		]);
	}

	private function nestedItem($item, array $options = []) {
		$itemOut = '';
		$children = '';

		if (!empty($item->children)) {
			$children .= $this->nestedList($item->children, $options);
		}

		$type = 'Page';

		if (!isset($options['class'])) {
			$options['class'] = 'menu-' . strtolower($type);
		}

		$linkOptions = $options['link'];
		if (empty($linkOptions)) {
			$linkOptions['class'] = 'menu-link';
		} else {
			$linkOptions['class'] .= ' menu-link';
		}
		
		switch ($type) {
			case 'Page':
				$itemOut .= $this->formatTemplate('link', [
					'attrs' => $this->templater()->formatAttributes($linkOptions),
					'content' => $item->name,
					'url' =>  $this->Url->build(['controller' => 'pages', 'action' => 'display', $item->name])
				]);
				$itemOut .= $children;
				break;
			case 'Link':
				$itemOut .= $this->formatTemplate('link', [
					'attrs' => $this->templater()->formatAttributes($linkOptions),
					'content' => $item->name,
					'url' => $item->url
				]);
				$itemOut .= $children;
				break;
			case 'Folder':
				$summary = $this->formatTemplate('summary', [
					'attrs' => $this->templater()->formatAttributes($linkOptions),
					'content' => $item->name,
				]);

				$itemOut .= $this->formatTemplate('details', [
					'attrs' => $this->templater()->formatAttributes($linkOptions),
					'content' => $summary . $children,
				]);
				break;
		}

		$itemOptions = isset($options['item']) ? $options['item'] : [];
		if (!isset($itemOptions['class'])) {
			$itemOptions['class'] = 'menu-item';
		}
		
		return $this->formatTemplate('li', [
			'attrs' => $this->templater()->formatAttributes($itemOptions),
			'content' => $itemOut,
		]);
	}
}