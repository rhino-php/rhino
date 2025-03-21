<div id="<?= 'element-' . $component->id ?>" class="layout-element <?= !$component->active && isset($component->active) ? 'inactive' : '' ?>" draggable="false"
	data-position="<?= $component->position ?>" data-id="<?= $component->id ?>">
	<div class="layout-handle">
		<div class="layout-handle__actions">
			<?php
			// $this->Form->button("menu", [
			// 	'name' => 'move', 
			// 	'class' => 'layout-button icon',
			// 	'escapeTitle' => false,
			// 	'title' => __("Move Content"),
			// ]) 
			?>

			<?= $this->Form->select('template_id', $templates, [
				'class' => 'rhino-select',
				'value' => $component['template_id'],
				'data-id' => $component->id
			]); ?>
		</div>

		<div class="layout-handle__actions">
			<?= $this->Form->button($this->Icon->svg("Rhino.arrow-up"), [
				'escapeTitle' => false,
				'title' => __("Move up"),
				'name' => 'move_up',
				'value' => $component->id,
				'class' => 'layout-button'
			]) ?>

			<?= $this->Form->button($this->Icon->svg("Rhino.arrow-down"), [
				'escapeTitle' => false,
				'title' => __("Move down"),
				'name' => 'move_down',
				'value' => $component->id,
				'class' => 'layout-button'
			]) ?>

			<?= $this->Form->button($this->Icon->svg("Rhino.eye") . $this->Icon->svg("Rhino.eye-off"), [
				'escapeTitle' => false,
				'title' => __("toggle Active"),
				'name' => 'toggle',
				'value' => $component->id,
				'class' => 'layout-button'
			]) ?>

			<?= $this->Form->button($this->Icon->svg("Rhino.trash"), [
				'escapeTitle' => false,
				'title' => __("Delete"),
				'name' => 'delete',
				'value' => $component->id,
				'class' => 'layout-button'
			]) ?>
		</div>
	</div>


	<div class="element-container" data-id="<?= $component->id ?>">
		<?= $this->element($component->template->element, array_merge($component->toArray(), ['layoutmode' => true])) ?>
	</div>
</div>