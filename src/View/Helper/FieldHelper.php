<?php
/* src/View/Helper/LinkHelper.php */

namespace Rhino\View\Helper;

use Cake\Collection\Iterator\UniqueIterator;
use Cake\View\Helper;
use Cake\View\StringTemplateTrait;
use Cake\Utility\Inflector;
use Rhino\Handlers\FieldHandler;
use Rhino\Handlers\FileHandler;
use Cake\View\Helper\IdGeneratorTrait;
use Cake\Core\Configure;
use Rhino\Model\Table\MediaCategoriesTable;
use Rhino\Model\Table\WidgetsTable;
use Rhino\Model\Table\ComponentsTable;

class FieldHelper extends Helper
{
	use StringTemplateTrait;
	use IdGeneratorTrait;

	/**
	 * Undocumented variable
	 *
	 * @var array
	 */
	public $counter = [];
	public $currentComponent;

	/**
	 * Default config for this class
	 *
	 * @var array<string, mixed>
	 */
	protected array $_defaultConfig = [
		'templates' => [
			'tag' => '<{{tag}}{{attrs}}>{{content}}</{{tag}}>',
			'sectionHeader' => '<div class="section-header"><h3{{attrs}}>{{content}}</h3></div>',
			'control' => '<div>{{content}}{{description}}</div>',
			'tabButton' => '<li><button role="radio" name="{{tabGroup}}" class="tab-button" data-target="{{tab}}">{{content}}</button></li>',
			'tabGroup' => '<div id="{{tabGroup}}" class="tab-group"><ul class="tab-group__header">{{tabButtons}}</ul><div class="tab-group__body">{{content}}</div></div>',
			'tab' => '<div id="{{tab}}" class="tab">{{content}}</div>',
			'details' => '<details{{attrs}}><summary role>{{summary}}</summary>{{content}}</details>',
			'ul' => '<ul{{attrs}}>{{content}}</ul>',
			'li' => '<li{{attrs}}>{{content}}</li>',
		]
	];

	protected int $tabGroupCounter = 0;

	/**
	 * List of helpers used by this helper
	 *
	 * @var array
	 */
	protected array $helpers = ['Form', 'Html', 'Icon', 'Url', 'Layout', 'Rhino'];

	public function initialize(array $config): void {
		$this->FieldHandler = new FieldHandler();
	}

	public function editField($fieldName, $entity, $options = []) {
		$displayOptions = $this->FieldHandler->loadField($fieldName, $entity);
		$options = array_merge($displayOptions ?? [], $options);
		return $this->Rhino->control($fieldName, $options);
	}

	public function displayField($fieldName, $entity) {
		return $this->FieldHandler->displayField($fieldName, $entity);
	}

	public function render($fields, $entity, $options) {
		$content = '';

		foreach ($fields as $field) {
			if ($field['name'] == 'id' && $field['extra'] == 'auto_increment') {
				continue;
			}

			$options['label'] = $field['alias'];
			$content .= $this->editField($field->name, $entity, $options);
		}

		return $content;
	}
}
