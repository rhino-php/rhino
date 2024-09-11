<?php
declare(strict_types=1);

namespace Rhino\Model\Table;

use Cake\ORM\Table;

use Migrations\Migrations;
use Migrations\AbstractMigration;
use Cake\Database\Schema\TableSchema;
use Cake\ORM\Locator\LocatorAwareTrait;
use Cake\ORM\TableRegistry;

class FieldsTable extends Table {
	use LocatorAwareTrait;

	public $types = [
		"string",
		"text",
		"integer",
		"boolean",
		"float",
		"date",
		"datetime",
		"time",
		"timestamp",
		"binary",
		"bit",
		"biginteger",
		"blob",
		"char",
		"decimal",
		"double",
		"enum",
		"json",
		"set",
		"smallinteger",
		"uuid"
	];

	public $translateType = [
		'int(11)' => "integer",
		'varchar(255)' => "string",
		'varchar(100)' => "string",
		'tinyint(1) unsigned' => "boolean",
		'tinyint(1)' => "boolean",
	];

	public $rows = [
		"Field",
		"Type",
		"Null",
		"Default",
		"Extra"
	];

	private $fieldValues = [
		"limit",
		"comment",
		"default",
		"null",
		"after",
		"signed",
		"precision",
		"scale",
		"values",
		"update",
		"timezone"
	];

	public array $unknownEntity = [
		'alias' => null,
		'description' => null,
		'default_value' => null,
		'created' => null,
		'modified' => null,
		'options' => []
	];

    public function initialize(array $config): void {
		parent::initialize($config);

        $this->belongsTo('Rhino.Applications', [
            'className' => 'Rhino.Applications',
            'foreignKey' => 'table_name',
            'bindingKey' => 'name'
        ]);

		$this->setTable('rhino_fields');
		$this->setDisplayField('id');
		$this->setPrimaryKey('id');
    }

	protected function getTableRegistry($tableName) {
		try {
			$Table = TableRegistry::getTableLocator()->get(ucfirst($tableName));
		} catch (\Throwable $th) {
			$Table = TableRegistry::getTableLocator()->get('Rhino.Tables');
			$Table->setTable($tableName);
		}

		return $Table;
	}

	private function getAbstract() {
		if (isset($this->abstract)) {
			return $this->abstract;
		}

		// Create Abstact to start Database Operations
		$migrations = new Migrations;
		$migrations->setInput($migrations->getInput('Seed', [], []));
		$manager = $migrations->getManager($migrations->getConfig());
		$env = $manager->getEnvironment('default');

		// Use Abstract to alter database
		// https://book.cakephp.org/phinx/0/en/migrations.html
		$this->abstract = new AbstractMigration('default', 19700101000000);
		$this->abstract->setAdapter($env->getAdapter());
		return $this->abstract;
	}

	public function create(string $tableName, array $data): void {
		$this->getAbstract();
		$table = $this->abstract->table($tableName);
		
		$name = $data['name'];
		$type = $data['type'];

		$data = $this->prepareFieldOptions($data);
		$table->addColumn($name, $type, $data);
		$table->save();
	}

	public function update($tableName, $fieldName, $data) {
		$this->getAbstract();
		$type = $data["type"];
		$table = $this->abstract->table($tableName);

		$data = $this->prepareFieldOptions($data);
		$table->changeColumn($fieldName, $type, $data);
		$table->update();
	}

	public function rename(string $tableName, string $currentName, string $name): void {
		$this->getAbstract();
		$table = $this->abstract->table($tableName);
		$table->renameColumn($currentName, $name)->save();
	}

	public function drop(string $tableName, string $field): void {
		$this->getAbstract();
		$table = $this->abstract->table($tableName);
		$table->removeColumn($field)->save();
	}

	public function getAll(string $tableName) {
		$fields = $this->find()->where(['table_name' => $tableName])->all();
		$columns = $this->getUnknown($tableName, array_column($fields->toArray(), 'name'));
		$fields = $fields->append($columns);
		return $fields;
	}

	public function getTableSchema(string $tableName) {
		$this->Schema = $this->getTableRegistry($tableName)->getSchema();
		return $this->Schema;
	}

	public function getUnknown(string $tableName, array $filter) {
		$schema = $this->getTableSchema($tableName);
		$_columns = $schema->columns();

		$columns = [];
		foreach ($_columns as $columnName) {
			$column = $schema->getColumn($columnName);

			if (in_array($columnName, $filter) || $columnName == 'id') {
				continue;
			}

			$columns[] = array_merge($this->unknownEntity ,[
				'name' =>  $columnName,
				'table_name' => $tableName,
				'type' => $this->getHumanType($column['type']),
				'default' => $column['default'],
			]);
		}

		return $this->newEntities($columns);
	}

	// todo: Change from Abstract to Schema! 
	public function getColumns(string $tableName) {
		// Protection against posible SQL Injection
		$this->getAbstract();
		if (!$this->abstract->hasTable($tableName)) {
			return;
		}

		$query = "describe " . $tableName;
		$_columns = $this->abstract->query($query)->fetchAll();
		$columns = [];

		foreach ($_columns as $fields) {
			$column = [];
			foreach ($this->rows as $row) {
				$column[$row] = $fields[$row];
			}

			$entry = $this->checkForEntry($column['Field'], $tableName);
			if (!empty($entry)) {
				$column['Type'] = $entry['type'];
			}

			$columns[] = $column;
		};

		return $columns;
	}

	public function getColumn(string $tableName, string $fieldName) {
		$columns = $this->getColumns($tableName);

		foreach ($columns as $column) {
			if ($column["Field"] == $fieldName) {
				return $column;
			}
		}

		return false;
	}

	public function getByName(string $fieldName, string $tableName) {
		$entry = $this->checkForEntry($fieldName, $tableName);
		$column = $this->getColumn($tableName, $fieldName);
		
		if (empty($entry)) {
			$entry = $this->newEntity([
				'name' => $fieldName,
				'table_name' => $tableName,
				'alias' => $column['Field'],
				'type' => $this->getHumanType($column['Type']),
				'standard' => $column['Default'],
				'extra' => $column['Extra']
			]);
		}
		
		$entry->type = $this->getHumanType($column['Type']);
		$entry->standard = $column['Default'];
		$entry->extra = $column['Extra'];

		return $entry;
	}





	public function checkForEntry($fieldName, $tableName) {
		$query = $this->find()->where(['name' => $fieldName, 'table_name' => $tableName]);
		if (!$query->all()->isEmpty()) {
			return $query->first();
		}
	
		return null;
	}

	public function getHumanType(string $type) : string {
		if (isset($this->translateType[$type])) {
			return $this->translateType[$type];
		}

		return $type;
	}

	private function prepareFieldOptions($data) {
		$options = [];

		foreach ($this->fieldValues as $value) {
			// $foo !== "" insted of !empty($foo) to allow 0 as default
			if (isset($data[$value]) && $data[$value] !== "") {
				$options[$value] = $data[$value];
			}
		}

		// if ($data['type'] == 'checkbox') {
		// 	# code...
		// 	if (isset($data['default']) && $data['default'] === 'false') {
		// 		$options['default'] = 0;
		// 	}

		// 	if (isset($data['default']) && $data['default'] === 'true') {
		// 		$options['default'] = 1;
		// 	}
		// }

		if (isset($data['null'])) {
			$options['null'] = (bool)$data['null'];
		}

		if (in_array($data['type'], ['datetime', 'date', 'time'])) {
			// if ($options['default'] === '0') {
			// 	$options['default'] = null;
			// }

			if (isset($data['current_time']) && $data["current_time"]) {
				$options["default"] = "CURRENT_TIMESTAMP";
			}
			
			if (isset($data['update_time']) && $data["update_time"]) {
				$options["update"] = "CURRENT_TIMESTAMP";
			}
		}
			
		return $options;
	}
}
