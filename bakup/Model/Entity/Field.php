<?php
// src/Model/Entity/Article.php
namespace Rhino\Model\Entity;

use Rhino\Model\Entity\AppEntity;

class Field extends AppEntity {

	protected array $_virtual = [
		'options',
		// 'class'
	];

	// public array $customTypes = [
	// 	"float" => 'decimal',
	// 	'boolean' => 'checkbox',
	// ];

	protected function _getOptions() {
		if (isset($this->conf)) {
			return $this->conf;
		}
		return json_decode($this->settings, true);
	}

	public function setOptions($options) {
		$this->conf = $options;
		// $this->options = $options;
	}

	public function getClass($app) {
		$config = [];

		if (!empty($app->fieldConfig) && in_array($this->name, array_keys($app->fieldConfig))) {
			$config = $app->fieldConfig[$this->name];

			if (isset($config['alias'])) {
				$this->alias = $config['alias'];
			}
		}

		$type = $config['type'] ?? $this->type;
		$className = sprintf('\Rhino\Fields\%s', ucfirst($type));
		if (class_exists($className)) {
			return new $className($this, $config);
		}

		return new \Rhino\Fields\Field($this, $config);
	}
}
