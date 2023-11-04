<?php
declare(strict_types=1);

namespace Rhino\Fields;

use Rhino\Model\Table\ApplicationsTable;
use Rhino\Model\ApplicationTrait;
use Cake\ORM\TableRegistry;

class Select {
	use ApplicationTrait;

	static public function loadOption() {
		$Apps = new ApplicationsTable();
		$tables = self::prepareSelect($Apps->getList());
		return ['tables' => $tables];
	}

	static public function prepareField($field) {
		$options = self::getOptions($field->options);

		$field['displayOptions'] = [
			"options" => self::addEmptyOption($options)
		];

		return $field;
	}

	static public function displayField($field, $value) {
		$options = self::getOptions($field->options);
		return $options[$value];
	}

	static private function getOptions($options) {
		try {
			$Table = TableRegistry::getTableLocator()->get(ucfirst($options["selectFromTable"]));
		} catch (\Throwable $th) {
			$Table = TableRegistry::getTableLocator()->get('Rhino.Tables');
			$Table->setTable($options["selectFromTable"]);
		}

		$select = ['fields' => [$options["selectFromValue"], $options["selectFromAlias"]]];
		$sql = json_decode($options["selectFromSQL"], true);
		if (is_array($sql)) {
			$select = array_merge($select, $sql);
		}

		return $Table->find('list', $select)->toArray();
	}
}