<?php
// src/Model/Entity/Article.php
namespace Rhino\Model\Entity;

use Cake\ORM\Entity;
use Rhino\Model\Table\FieldsTable;

class Application extends Entity
{
	protected array $_virtual = [
		'overviewData',
		'link',
		'fields',
	];

	protected function _getOverviewData() {
		if (empty($this->overview_fields)) {
			return [];
		}

		return json_decode($this->overview_fields, true);
	}

	public function _getAlias($alias) {
		return $alias ?? ucfirst($this->name);
	}

	public function _getLink() {
		$link = [
			'plugin' => 'Rhino',
			'controller' => 'Tables',
			'action' => 'index',
			'prefix' => false,
			$this->name
		];

		if ($this->is_custom) {
			$link = [
				'plugin' => null,
				'controller' => ucfirst($this->name),
				'action' => 'index',
				'prefix' => 'RhinoApp',
			];
		}

		return $link;
	}

	public function _getFields() {
		if (!$this->has_table) {
			return [];
		}

		$Fields = new FieldsTable();
		$fields = $Fields->getAll($this->name);
		// dd($fields->toArray()[2]);
		return $fields;
	}

	public function getField(string $fieldName) {
		$field = $this->fields->firstMatch(['name' => $fieldName]);
		
		if (empty($field)) {
			return null;
		}

		// $field->class = $field->getClass($this);
		return $field;
	}
}
