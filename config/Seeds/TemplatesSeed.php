<?php
declare(strict_types=1);

use Migrations\BaseSeed;

/**
 * TemplatesSeed seed.
 */
class TemplatesSeed extends BaseSeed
{
    /**
     * Run Method.
     *
     * Write your database seeder using this method.
     *
     * More information on writing seeds is available here:
     * https://book.cakephp.org/migrations/4/en/seeding.html
     *
     * @return void
     */
    public function run(): void
    {
        $data = [
			[
				'name' => 'Default',
				'file' => 'default.php',
				'template_type' => 0
			],
			[
				'name' => 'Text',
				'file' => 'text.php',
				'template_type' => 1
			],

			[
				'name' => 'Split',
				'file' => 'split.php',
				'template_type' => 1
			]
		];

        $table = $this->table('rhino_templates');
        $table->insert($data)->save();
    }
}
