<?php
declare(strict_types=1);

namespace Rhino\Model\Table;

use Cake\ORM\Table;

// use Rhino\Model\Table\FieldsTable;
use Migrations\Migrations;
use Migrations\AbstractMigration;
use Cake\Collection\Collection;

class ApplicationsTable extends Table
{
	public $tableBlackList = [
		"phinxlog",
		"rhino_phinxlog",
		'rhino_users',
		'rhino_roles',
		'rhino_groups',
		'rhino_apps',
		'rhino_fields',
		'rhino_pages',
		'rhino_nodes',
		'rhino_layouts',
		'rhino_elements',
		'rhino_contents',
		'rhino_media',
		'rhino_media_categories',
		'rhino_widgets',
		'rhino_widget_categories',
        'rhino_templates'
	];

	public array $unknownEntity = [
		'name' => null,
		'has_table' => true,
		'active' => false,
		'rhino_group_id' => null,
		'created' => null,
		'modified' => null,
		'is_custom' => false,
		'overviewData' => []
	];


    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config): void
    {
		parent::initialize($config);

        $this->hasMany('Rhino.Fields', [
            'className' => 'Rhino.Fields',
            'foreignKey' => 'table_name',
            'bindingKey' => 'name',
        ]);

		$this->belongsTo('Rhino.Groups');

        $this->setTable('rhino_apps');
		$this->setDisplayField('name');
        $this->setPrimaryKey('id');


		// Create Abstact to start Database Operations
		$migrations = new Migrations;
		$migrations->setInput($migrations->getInput('Seed', [], []));
		$manager = $migrations->getManager($migrations->getConfig());
		$env = $manager->getEnvironment('default');

		// Use Abstract to alter database
		// https://book.cakephp.org/phinx/0/en/migrations.html
		$this->abstract = new AbstractMigration('default', 19700101000000);
		$this->abstract->setAdapter($env->getAdapter());
    }

	public function getByName($tableName) {
		if (empty($tableName)) {
			return false;
		}

		$query = $this->find()->where(['Applications.name' => $tableName]);

		if ($query->all()->isEmpty()) {
			$unknown = $this->getUnknown(false);
			return $unknown->firstMatch(['name'=> $tableName]);
		}

		return $query->first();
	}

	public function getList(array $filter = [], bool $filtered = true) {
		$balcklist = $filter;
		if ($filtered) {
			$balcklist = array_merge($this->tableBlackList, $filter);
		}

		$_tables = $this->abstract->query("show tables")->fetchAll();

		$tables = [];
		foreach ($_tables as $table) {
			$tableName = $table[0];
			if (in_array($tableName, $balcklist)) {
				continue;
			}
			$tables[] = $tableName;
		}

		return $tables;
	}

	public function beforeMarshal($event, $data, $options) {
		if (!empty($data['overview_fields'])) {
			$data['overview_fields'] = json_encode($data['overview_fields']);
		}
	}

	public function getUnknown(bool $filtered = true) {
		$unknown = [];
		$apps = $this->find()->select(['name'])->where(['has_table' => true])->all()->toArray();
		$_unknown = $this->getList(array_column($apps, 'name'), $filtered);
		
		if (empty($_unknown)) {
			return;
		}
		
		foreach ($_unknown as $table) {
			$unknown[] = array_merge($this->unknownEntity, ['name' => $table]);
		}

		return new Collection($this->newEntities($unknown));
	}

	public function hasTable(string $tableName) : bool {
		return $this->abstract->hasTable($tableName);
	}

	public function create(string $tableName) : void {
		$table = $this->abstract->table($tableName);
		$table->create();
	}

	public function rename(string $tableName, string $newName) : void {
		$table = $this->abstract->table($tableName);
		$table->rename($newName)->update();
	}

	public function drop(string $tableName) : void {
		$table = $this->abstract->table($tableName);
		$table->drop()->save();
	}
}
