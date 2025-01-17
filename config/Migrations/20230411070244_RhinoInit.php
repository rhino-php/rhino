<?php
declare(strict_types=1);

use Migrations\AbstractMigration;

class RhinoInit extends AbstractMigration
{
    /**
     * Change Method.
     *
     * More information on this method is available here:
     * https://book.cakephp.org/phinx/0/en/migrations.html#the-change-method
     * @return void
     */
    public function change(): void {
		$options = [
			"collation" => 'utf8mb4_unicode_ci'
		];
		
		$this->table('rhino_nodes', $options)
			->addColumn('name', 'string', [
				'default' => null,
				'limit' => 100,
				'null' => false,
			])
			->addColumn('active', 'boolean', [
				'default' => 1,
			])
			->addColumn('created', 'timestamp', [
				'null' => false,
				'default' => 'CURRENT_TIMESTAMP',
			])
			->addColumn('modified', 'timestamp', [
				'null' => false,
				'default' => 'CURRENT_TIMESTAMP',
				'update' => 'CURRENT_TIMESTAMP',
			])
			->addColumn('user_id', 'integer', [
				'null' => false,
			])
			->addColumn('node_type', 'integer', [
				'null' => false,
			])
			->addColumn('role', 'integer', [
				'null' => true,
				'default' => 0
			])
			->addColumn('parent_id', 'integer', [
				'default' => null,
				'limit' => 11,
				'null' => true,
			])
			->addColumn('lft', 'integer', [
				'default' => null,
				'limit' => 10,
				'null' => false,
			])
			->addColumn('rght', 'integer', [
				'default' => null,
				'limit' => 10,
				'null' => false,
			])
			->addColumn('level', 'integer', [
				'default' => 0,
				'limit' => 10,
				'null' => false,
			])
			->addColumn('template_id', 'integer', [
				'default' => 0,
			])
			->addColumn('language', 'string', [
				'default' => 'de',
				'null' => false,
			])
			->addColumn('version', 'integer', [
					'default' => null,
					'null' => true,
				])
			->addColumn('config', 'text', [
					'default' => null,
					'null' => true,
				])
			->addColumn('content', 'text', [
					'default' => null,
					'null' => true,
				])
			->addIndex(['lft'], ['name' => 'idx_lft'])
			->addIndex(['parent_id'])
			->create();

		$this->table('rhino_templates', $options)
			->addColumn('name', 'string', [
				'default' => null,
				'limit' => 100,
				'null' => false,
			])
			->addColumn('file', 'string', [
				'default' => null,
			])
			->addColumn('active', 'boolean', [
				'default' => 1,
			])
			->addColumn('template_type', 'integer', [
				'default' => 1,
				'null' => false,
			])
			->addColumn('created', 'timestamp', [
				'default' => 'CURRENT_TIMESTAMP'
			])
			->addColumn('modified', 'timestamp', [
				'default' => 'CURRENT_TIMESTAMP',
				'update' => 'CURRENT_TIMESTAMP'
			])
			->create();

		// $this->table('rhino_media', $options)
		// 	->addColumn('filename', 'string')
		// 	->addColumn('description', 'text')
		// 	->addColumn('type', 'string')
		// 	->addColumn('position', 'integer')
		// 	->addColumn('media_category_id', 'integer')
		// 	->addColumn('created', 'timestamp', [
		// 		'default' => 'CURRENT_TIMESTAMP'
		// 	])
		// 	->addColumn('modified', 'timestamp', [
		// 		'default' => 'CURRENT_TIMESTAMP',
		// 		'update' => 'CURRENT_TIMESTAMP'
		// 	])
		// 	->create();

		// $this->table('rhino_media_categories', $options)
		// 	->addColumn('name', 'string')
		// 	->addColumn('description', 'text')
		// 	->create();

		// $this->table('rhino_widget_categories', $options)
		// 	->addColumn('name', 'string')
		// 	->addColumn('description', 'text')
		// 	->create();

		// $this->table('rhino_widgets', $options)
		// 	->addColumn('name', 'string')
		// 	->addColumn('description', 'text')
		// 	->addColumn('template', 'string')
		// 	->addColumn('widget_category_id', 'integer')
		// 	->addColumn('position', 'integer')
		// 	->addColumn('created', 'timestamp', [
		// 		'default' => 'CURRENT_TIMESTAMP'
		// 	])
		// 	->addColumn('modified', 'timestamp', [
		// 		'default' => 'CURRENT_TIMESTAMP',
		// 		'update' => 'CURRENT_TIMESTAMP'
		// 	])
		// 	->create();
		
    }
}
