<?php
declare(strict_types=1);

namespace Rhino\Test\TestCase\View\Cell;

use Cake\TestSuite\TestCase;
use Rhino\View\Cell\PagesCell;

/**
 * Rhino\View\Cell\PagesCell Test Case
 */
class PagesCellTest extends TestCase
{
    /**
     * Request mock
     *
     * @var \Cake\Http\ServerRequest|\PHPUnit\Framework\MockObject\MockObject
     */
    protected $request;

    /**
     * Response mock
     *
     * @var \Cake\Http\Response|\PHPUnit\Framework\MockObject\MockObject
     */
    protected $response;

    /**
     * Test subject
     *
     * @var \Rhino\View\Cell\PagesCell
     */
    protected $Pages;

    /**
     * setUp method
     *
     * @return void
     */
    protected function setUp(): void
    {
        parent::setUp();
        $this->request = $this->getMockBuilder('Cake\Http\ServerRequest')->getMock();
        $this->response = $this->getMockBuilder('Cake\Http\Response')->getMock();
        $this->Pages = new PagesCell($this->request, $this->response);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    protected function tearDown(): void
    {
        unset($this->Pages);

        parent::tearDown();
    }

    /**
     * Test display method
     *
     * @return void
     * @uses \Rhino\View\Cell\PagesCell::display()
     */
    public function testDisplay(): void
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
