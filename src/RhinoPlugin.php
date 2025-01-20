<?php
declare(strict_types=1);

namespace Rhino;

use Cake\Console\CommandCollection;
use Cake\Core\BasePlugin;
use Cake\Core\ContainerInterface;
use Cake\Core\PluginApplicationInterface;
use Cake\Http\MiddlewareQueue;
use Cake\Routing\RouteBuilder;
use Cake\Routing\Route\DashedRoute;

/**
 * Plugin for Rhino
 */
class RhinoPlugin extends BasePlugin {
	/**
	 * Load all the plugin configuration and bootstrap logic.
	 *
	 * The host application is provided as an argument. This allows you to load
	 * additional plugin dependencies, or attach events.
	 *
	 * @param \Cake\Core\PluginApplicationInterface $app The host application
	 * @return void
	 */
	public function bootstrap(PluginApplicationInterface $app): void {
	}

	/**
	 * Add routes for the plugin.
	 *
	 * If your plugin has many routes and you would like to isolate them into a separate file,
	 * you can create `$plugin/config/routes.php` and delete this method.
	 *
	 * @param \Cake\Routing\RouteBuilder $routes The route builder to update.
	 * @return void
	 */
	public function routes(RouteBuilder $routes): void {
		parent::routes($routes);
		
		$routes->connect('/pages', ['controller' => 'Pages', 'plugin' => 'Rhino', 'action' => 'index']);
		$routes->connect('/templates', ['controller' => 'Templates', 'plugin' => 'Rhino', 'action' => 'index']);

		$routes->connect('/img/{file}', ['plugin' => 'Rhino', 'controller' => 'Pages', 'action' => 'getFile']);

		$routes->scope('/', function (RouteBuilder $routes) {
			$routes->resources('/pages/display/{page}', ['path' => '/de/{pages}']);
		});

		$routes->connect('/de/{page}', ['controller' => 'Pages', 'action' => 'display'])
			->setPass(['page', 'lang'])
			->setPatterns(['lang' => 'en|fr|es|de'])
			->setPersist(['lang']);

		$routes->plugin('Rhino', function (RouteBuilder $routes) {
			$routes->fallbacks(DashedRoute::class);
		});
	}

	/**
	 * Add middleware for the plugin.
	 *
	 * @param \Cake\Http\MiddlewareQueue $middlewareQueue The middleware queue to update.
	 * @return \Cake\Http\MiddlewareQueue
	 */
	public function middleware(MiddlewareQueue $middlewareQueue): MiddlewareQueue {
		return $middlewareQueue;
	}

	/**
	 * Add commands for the plugin.
	 *
	 * @param \Cake\Console\CommandCollection $commands The command collection to update.
	 * @return \Cake\Console\CommandCollection
	 */
	public function console(CommandCollection $commands): CommandCollection {
		// Add your commands here

		$commands = parent::console($commands);

		return $commands;
	}

	/**
	 * Register application container services.
	 *
	 * @param \Cake\Core\ContainerInterface $container The Container to update.
	 * @return void
	 * @link https://book.cakephp.org/4/en/development/dependency-injection.html#dependency-injection
	 */
	public function services(ContainerInterface $container): void {
		// Add your services here
	}
}
