<?php
declare(strict_types=1);

namespace Rhino;

use Cake\Console\CommandCollection;
use Cake\Core\BasePlugin;
use Cake\Core\ContainerInterface;
use Cake\Core\PluginApplicationInterface;
use Cake\Http\MiddlewareQueue;
use Cake\Routing\RouteBuilder;

use Authentication\AuthenticationService;
use Authentication\AuthenticationServiceInterface;
use Authentication\AuthenticationServiceProviderInterface;
use Authentication\Middleware\AuthenticationMiddleware;
use Cake\Routing\Router;
use Psr\Http\Message\ServerRequestInterface;

use Authorization\AuthorizationService;
use Authorization\AuthorizationServiceInterface;
use Authorization\AuthorizationServiceProviderInterface;
use Authorization\Middleware\AuthorizationMiddleware;
use Authorization\Middleware\RequestAuthorizationMiddleware;
use Authorization\Policy\ResolverCollection;
use Authorization\Policy\OrmResolver;
use Authorization\Policy\MapResolver;
use Authorization\Exception\ForbiddenException;
use Authentication\Identifier\AbstractIdentifier;

use Cake\Http\ServerRequest;
use App\Policy\RequestPolicy;

/**
 * Plugin for Rhino
 */
class RhinoPlugin extends BasePlugin implements AuthenticationServiceProviderInterface, AuthorizationServiceProviderInterface {
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
	
		$routes->prefix('RhinoApp', function (RouteBuilder $builder) {
			$builder->connect('/{controller}/{action}/*');
			$builder->connect('/{controller}/*', ['action' => 'index']);
		});

		$routes->plugin(
			'Rhino',
			['path' => '/rhino'],
			function (RouteBuilder $builder) {
				// Add custom routes here
				$builder->connect('/', ['controller' => 'Users', 'action' => 'login']);
				$builder->fallbacks();
			}
		);

		parent::routes($routes);
	}

	/**
	 * Add middleware for the plugin.
	 *
	 * @param \Cake\Http\MiddlewareQueue $middlewareQueue The middleware queue to update.
	 * @return \Cake\Http\MiddlewareQueue
	 */
	public function middleware(MiddlewareQueue $middlewareQueue): MiddlewareQueue {
		return $middlewareQueue
			->add(new AuthenticationMiddleware($this))
			->add(new AuthorizationMiddleware($this, [
				'unauthorizedHandler' => [
					'className' => 'Authorization.Redirect',
					'url' => '/rhino/users/login',
					'queryParam' => 'redirectUrl',
					'exceptions' => [
						MissingIdentityException::class,
						ForbiddenException::class,
					],
				],
			]))
			->add(new RequestAuthorizationMiddleware());
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

	public function getAuthenticationService(ServerRequestInterface $request): AuthenticationServiceInterface {
		if ($request->getParam('plugin') === "Rhino" || $request->getParam('prefix') == 'RhinoApp') {
			// Reuse fields in multiple authenticators.
			$fields = [
				AbstractIdentifier::CREDENTIAL_USERNAME => 'email',
				AbstractIdentifier::CREDENTIAL_PASSWORD => 'password',
			];

			$login = Router::url([
				'plugin' => 'Rhino',
				'controller' => 'Users',
				'action' => 'login',
				'prefix' => false,
			]);

			$authenticationService = new AuthenticationService([
				'unauthenticatedRedirect' => $login,
				'queryParam' => 'redirect',
			]);

			// Load the authenticators, you want session first
			$authenticationService->loadAuthenticator('Authentication.Session');

			// If the user is on the login page, check for a cookie as well.
			$authenticationService->loadAuthenticator('Authentication.Cookie', [
				'fields' => $fields
			]);

			// Configure form data check to pick email and password
			$authenticationService->loadAuthenticator('Authentication.Form', [
				'fields' => $fields
			]);

			// Load identifiers, ensure we check email and password fields
			$authenticationService->loadIdentifier('Authentication.Password', [
				'fields' => $fields,
				'resolver' => [
					'className' => 'Authentication.Orm',
					'userModel' => 'Rhino.Users',
					'finder' => 'all', // alterenatively: 'active'
				]
			]);

			return $authenticationService;
		}

		$authenticationService = new AuthenticationService();
		// Load identifiers, ensure we check email and password fields
		$authenticationService->loadIdentifier('Authentication.Password');
		// Load the authenticators, you want session first
		$authenticationService->loadAuthenticator('Authentication.Session');

		return $authenticationService;
	}

	public function getAuthorizationService(ServerRequestInterface $request): AuthorizationServiceInterface {
		if ($request->getParam('plugin') === "Rhino") {
			$ormResolver = new OrmResolver();
			$mapResolver = new MapResolver();
			$mapResolver->map(ServerRequest::class, RequestPolicy::class);
			// $resolver = new ResolverCollection([$mapResolver, $ormResolver]);
			return new AuthorizationService($mapResolver);
		}

		// $ormResolver = new OrmResolver();
		$mapResolver = new MapResolver();
		$mapResolver->map(ServerRequest::class, RequestPolicy::class);
		// $resolver = new ResolverCollection([$mapResolver, $ormResolver]);
		return new AuthorizationService($mapResolver);
	}
}
