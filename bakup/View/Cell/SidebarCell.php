<?php

declare(strict_types=1);

namespace Rhino\View\Cell;

use App\View\Cell\AppCell;

/**
 * Sidebar cell
 */
class SidebarCell extends AppCell {

	public function display() {
		$sidebar = isset($this->sidebar) ? $this->sidebar : [];

		if (method_exists($this, 'setSidebar')) {
			$sidebar = $this->setSidebar();
		}

		$this->set('sidebar', $sidebar);
	}
}