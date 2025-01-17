<?php
declare(strict_types=1);

namespace Rhino\Test\TestCase\Model\Table;

use Cake\TestSuite\TestCase;
use Rhino\Model\Table\TemplatesTable;

/**
 * Rhino\Model\Table\TemplatesTable Test Case
 */
class TemplatesTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \Rhino\Model\Table\TemplatesTable
     */
    protected $Templates;

    /**
     * Fixtures
     *
     * @var list<string>
     */
    protected array $fixtures = [
        'plugin.Rhino.Templates',
        'plugin.Rhino.Nodes',
    ];

    /**
     * setUp method
     *
     * @return void
     */
    protected function setUp(): void
    {
        parent::setUp();
        $config = $this->getTableLocator()->exists('Templates') ? [] : ['className' => TemplatesTable::class];
        $this->Templates = $this->getTableLocator()->get('Templates', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    protected function tearDown(): void
    {
        unset($this->Templates);

        parent::tearDown();
    }

    /**
     * Test getEntry method
     *
     * @return void
     * @uses \Rhino\Model\Table\TemplatesTable::getEntry()
     */
    public function testGetEntry(): void
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test list method
     *
     * @return void
     * @uses \Rhino\Model\Table\TemplatesTable::list()
     */
    public function testList(): void
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
