<?php
declare(strict_types=1);

namespace Rhino\Model\Entity;

use Rhino\Model\Entity\Node;


class Component extends Node {
	public function toggle() {
		$status = !$this->active;
		$this->active = $status;
		return $status;
	}
}
