<?php

declare(strict_types=1);

namespace Rhino\View\Cell;

use Cake\View\Cell;

/**
 * Sidebar cell
 */
class GroupsCell extends Cell {
	/**
	 * List of valid options that can be passed into this
	 * cell's constructor.
	 *
	 * @var array<string, mixed>
	 */
	protected array $_validCellOptions = [];

	/**
	 * Initialization logic run at the end of object construction.
	 *
	 * @return void
	 */
	public function initialize(): void {
		$this->Groups = $this->fetchTable('Rhino.Groups');
		$this->Roles = $this->fetchTable('Rhino.Roles');
	}

	/**
	 * Default display method.
	 *
	 * @return void
	 */
	public function display() {
		$this->user = $this->request->getAttribute('authentication')->getIdentity();

		// ToDo: Contain bricks new installs?
		$_groups = $this->Groups->find('all')->contain(['Applications'])->all();
		$_apps = $this->Groups->Applications->find('all')->toArray();
		$groups = [];

		$handledApps = [];
		foreach ($_groups as $group) {
			$apps = [];
			foreach ($group['applications'] as $app) {
				$link = ['plugin' => 'Rhino', 'controller' => 'Tables', "action" => "index", $app['name']];
				if ($app['is_custom']) {
					$link = ['plugin' => null, 'controller' => $app['name'], "action" => "index"];
				}
				$apps[] = [
					'name' => isset($app['alias']) ? $app['alias'] : $app["name"],
					'icon' => null,
					'link' => $link,
					'rights' => $app['name']
				];
				$handledApps[] = $app['name'];
			}

			$groups[] = [
				'name' => $group["name"],
				'icon' => null,
				'buttons' => $apps
			];
		}

		foreach ($_apps as $app) {
			if (in_array($app['name'], $handledApps)) {
				continue;
			}

			$link = ['plugin' => 'Rhino', 'controller' => 'Tables', "action" => "index", $app['name']];
			if ($app['is_custom']) {
				$link = ['plugin' => null, 'controller' => $app['name'], "action" => "index"];
			}

			$groups[] = [
				'name' => isset($app['alias']) ? $app['alias'] : $app["name"],
				'icon' => null,
				'link' => $link,
				'rights' => $app['name']
			];
		}

		$navs = [
			[
				'heading' => 'Angemeldet als ' . $this->user->name,
				"buttons" => [
					[
						'name' => 'Dashboard',
						'link' => ['plugin' => 'Rhino', 'controller' => 'Overview', 'action' => 'display', 'home'],
						'icon' => "Rhino.home"
					]
				]
			],
			[
				'heading' => 'Standardfunktionen',
				"buttons" => [
					[
						'name' => 'Seiten',
						'link' => ['plugin' => 'Rhino', 'controller' => 'Pages', 'action' => 'index'],
						'icon' => "Rhino.file",
						'rights' => 'rhino_pages'
					],
					[
						'name' => 'Medien',
						'link' => ['plugin' => 'Rhino', 'controller' => 'MediaCategories', 'action' => 'index'],
						'icon' => "Rhino.image",
						'rights' => 'rhino_media'
					],
					[
						'name' => 'Widgets',
						'link' => ['plugin' => 'Rhino', 'controller' => 'WidgetCategories', 'action' => 'index'],
						'icon' => "Rhino.sidebar",
						'rights' => 'rhino_widgets'
					],
				]
			],
			[
				'heading' => 'Zusatzfunktionen',
				'buttons' => $groups
			],
			[
				'heading' => 'Einstellungen',
				"buttons" => [
					[
						'name' => 'Templates',
						'icon' => "Rhino.table",
						'link' => ['plugin' => 'Rhino', 'controller' => 'Tables', 'action' => 'index', 'rhino_templates'],
						'rights' => 'rhino_templates'
					],
					[
						'name' => _('App-Manager'),
						'icon' => "Rhino.database",
						'link' => ['plugin' => 'Rhino', 'controller' => 'Applications', "action" => "index"],
						'rights' => 'rhino_apps'
					],
					[
						'name' => 'Nutzerverwaltung',
						'icon' => "Rhino.users",
						'link' => ['plugin' => 'Rhino', 'controller' => 'Users', 'action' => 'index'],
						'rights' => 'rhino_users'
					],
					[
						'name' => 'Rechteverwaltung',
						'icon' => "Rhino.lock",
						'link' => ['plugin' => 'Rhino', 'controller' => 'Roles', 'action' => 'index'],
						'rights' => 'rhino_roles'
					]
				],
			]
		];


		$this->set([
			"navs" => $this->cleanNav($navs),
			"user" => $this->user
		]);
	}

	private function cleanNav($navs) {
		$checkRights = function ($button) {
			if (!isset($button['rights'])) {
				return $button;
			}

			$access = $this->Roles->checkGroupRights($this->user->role_id, $button['rights'], 'view');
			if (!$access) {
				return;
			}

			return $button;
		};

		$isEmpty = function ($group) {
			if (isset($group['buttons'])) {
				$values = array_filter($group['buttons']);
				if (empty($values)) {
					return;
				}
			}

			return $group;
		};

		$navs = array_map(function ($nav) use ($checkRights, $isEmpty) {
			$nav['buttons'] = array_map(function ($group) use ($checkRights) {
				if (isset($group['buttons'])) {
					$group['buttons'] = array_map($checkRights, $group['buttons']);
				}

				return $group;
			}, $nav['buttons']);

			$nav['buttons'] = array_map($checkRights, $nav['buttons']);
			$nav['buttons'] = array_map($isEmpty, $nav['buttons']);

			return $nav;
		}, $navs);

		$navs = array_map($isEmpty, $navs);
		$navs = array_filter($navs);
		return $navs;
	}
}
