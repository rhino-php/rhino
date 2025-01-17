<?php
declare(strict_types=1);

namespace Rhino\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;
use Cake\Database\Type\EnumType;

enum TemplateType: int {
	case Layout = 0;
	case Element = 1;
}

class TemplatesTable extends Table {

	/**
	 * Initialize method
	 *
	 * @param array $config The configuration for the Table.
	 * @return void
	 */
	public function initialize(array $config): void {
		parent::initialize($config);

		$this->setTable('rhino_templates');
		$this->setDisplayField('name');
		$this->setPrimaryKey('id');

		$this->hasMany('Nodes', [
			'className' => 'Rhino.Nodes',
		]);

		$this->getSchema()->setColumnType('template_type', EnumType::from(TemplateType::class));
	}

	public function getEntry(int $id = null): object {
		if (!empty($id)) {
			return $this->get($id);
		}

		return $this->newEmptyEntity();
	}

	public function list($type = 0) {
		return $this->find('list')
			->where(['active' => true, 'template_type' => $type])
			->select(['id', 'name'])
			->all();
	}
}