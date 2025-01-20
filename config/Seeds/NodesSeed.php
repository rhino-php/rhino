<?php
declare(strict_types=1);

use Migrations\BaseSeed;

/**
 * Nodes seed.
 */
class NodesSeed extends BaseSeed
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
				'name' => 'Home',
				'node_type' => 0,
				'role' => 3,
				'template_id' => 1,
				'parent_id' => null,
				'lft' => 0,
				'rght' => 2,
				'level' => 0,
				'user_id' => 1
			],
			[
				'name' => 'content',
				'node_type' => 1,
				'role' => 0,
				'template_id' => 2,
				'parent_id' => 1,
				'content' => '{"time":1690121834854,"blocks":[{"id":"BkMrFh55lD","type":"header","data":{"text":"Welcome to Rhino &#x1F98F;","level":1}},{"id":"R_LcFT6kwI","type":"paragraph","data":{"text":"The fast but stable Application-Framwork.<br>Powered by <a href=\"https://cakephp.org/\">CakePHP</a>."}}],"version":"2.26.5"}',
				'lft' => 1,
				'rght' => 1,
				'level' => 1,
				'user_id' => 1
			]
		];

        $table = $this->table('rhino_nodes');
        $table->insert($data)->save();
    }
}
