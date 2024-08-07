<?php
declare(strict_types=1);

namespace Rhino\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

class GroupsTable extends Table
{
    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config): void
    {
        parent::initialize($config);

        $this->setTable('rhino_groups');
        $this->setDisplayField('name');
        $this->setPrimaryKey('id');

		$this->hasMany('Rhino.Applications');
    }

	public function getGroups() {
		$groups = $this->find()->contain(['Applications'])->all();
		return $groups;
	}
		
	public function getGroupNames(): array {
		$_groups = $this->find()->all()->toArray();
		
		$keys = array_column($_groups, "id");
		$values = array_column($_groups, "name");

		return array_combine($keys, $values);
	}

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator): Validator
    {
        $validator
            ->scalar('name')
            ->maxLength('name', 255)
            ->requirePresence('name', 'create')
            ->notEmptyString('name');

        return $validator;
    }
}
