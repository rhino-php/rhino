<?php
declare(strict_types=1);

use Migrations\AbstractMigration;

class CustomApps extends AbstractMigration
{
    /**
     * Change Method.
     *
     * More information on this method is available here:
     * https://book.cakephp.org/phinx/0/en/migrations.html#the-change-method
     * @return void
     */
    public function change(): void
    {
		$this->table('rhino_apps')
		->addColumn('is_custom', 'boolean', [
			'default' => 0,
		])
		->addColumn('has_table', 'boolean', [
			'default' => 1,
		])
		->update();
    }
}
