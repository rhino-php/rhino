<?php
declare(strict_types=1);

namespace Rhino\Test\Fixture;

use Cake\TestSuite\Fixture\TestFixture;

/**
 * TemplatesFixture
 */
class TemplatesFixture extends TestFixture
{
    /**
     * Table name
     *
     * @var string
     */
    public string $table = 'rhino_templates';
    /**
     * Init method
     *
     * @return void
     */
    public function init(): void
    {
        $this->records = [
            [
                'id' => 1,
                'name' => 'Lorem ipsum dolor sit amet',
                'file' => 'Lorem ipsum dolor sit amet',
                'active' => 1,
                'template_type' => 1,
                'created' => 1737038998,
                'modified' => 1737038998,
            ],
        ];
        parent::init();
    }
}
