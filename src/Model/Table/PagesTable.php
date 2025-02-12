<?php

declare(strict_types=1);

namespace Rhino\Model\Table;

use Rhino\Model\Table\NodesTable;
use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;
use Cake\Database\Type\EnumType;

enum PageRoles: int {
	case Page = 0;
	// case Link = 1;
	// case Folder = 2;
	case Home_Page = 3;
	case Error_Page = 4;
}

class PagesTable extends NodesTable {
	/**
	 * Initialize method
	 *
	 * @param array $config The configuration for the Table.
	 * @return void
	 */
	public function initialize(array $config): void {
		parent::initialize($config);
		$this->getSchema()->setColumnType('role', EnumType::from(PageRoles::class));
	}

	public function beforeSave($event, $entity, $options) {
		$isHomePage = $entity->role->value == 3;
		if (!$isHomePage) {
			return;
		}

		$pages = $this->find()
			->where(["role" => 3])
			->all()
			->toArray();

		array_walk($pages, function ($page) {
			$page->role = 0;
			$this->save($page);
		});
	}

	public function slug(?string $slug = null) {
		$where = ["Pages.name" => $slug];
		$where['node_type'] = 0;

		if ($slug == null || $slug == 'default') {
			$where= [
				"role" => 3, 
				'node_type' => 0
			];
		}

		$page = $this->find()
			->where($where)
			->contain(['Templates'])
			->first();

		return $page;
	}

	public function getMenu(?int $root = null, ?int $limit = null) {
		$_menu = $this->find('threaded')->where(['node_type' => 0])->orderBy(["lft" => 'ASC']);
		if (!empty($root)) {
			$_menu->find('children', for: $root);
		}

		$menu = $_menu->toArray();

		if (empty($menu)) {
			return $menu;
		}

		if (isset($limit)) {
			$limit = $menu[0]->level + $limit;
		}

		// Todo: do this in Query
		$menu = $this->filterInactive($menu, $limit ?? null);

		return $menu;
	}

	private function filterInactive($input, $limit = null) {
		$output = [];
		foreach ($input as $page) {
			if (isset($limit) && $page->level > $limit) {
				continue;
			}

			if ($page->active) {
				$page->children = $this->filterInactive($page->children, $limit);
				$output[] = $page;
			}
		}
		return $output;
	}
}
