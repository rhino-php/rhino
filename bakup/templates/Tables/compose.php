<?php

$currentTable = $this->app->name;

$tableColumns = $entry->getVisible();

if (!empty($this->app->overView)) {
	$tableColumns = $this->app->detailView;
}

if (empty($tableColumns)) {
	$tableColumns = $this->app->fields->extract('name');
}

$options = [];

if (isset($readonly) && $readonly) {
	$options['disabled'] = true;
}

?>

<section class="stack-400">
	<h1><?= $title ?></h1>
	
	<!-- <?php debug($this->app->fields) ?> -->

	<?= $this->Form->create($entry, ['type' => 'file', "class" => "stack-400"]); ?>

	<?php if ($action != 'add') : ?>
		<div class="cluster pill">
			<?= $this->Html->link("prev", ["controller" => "tables", "action" => $action, $currentTable, $prevId], ["class" => "button", "disabled" => empty($prevId)]) ?>
			<?= $this->Html->link("next", ["controller" => "tables", "action" => $action, $currentTable, $nextId], ["class" => "button", "disabled" => empty($nextId)]) ?>
		</div>
	<?php endif ?>

	<?php foreach ($tableColumns as $fieldName) : ?>
		<?php if ($fieldName == 'id') continue; ?>
		<?= $this->Field->editField($fieldName, $entry, $options) ?>
	<?php endforeach ?>

	<div class="cluster pill">
		<?php if ($action != 'view') : ?>
			<?= $this->Form->button(__('Save Entry'), ['name' => 'save', 'type' => 'button']); ?>
			<?= $this->Form->button(__('Save & Exit')); ?>
		<?php endif ?>
		<?= $this->Html->link("Exit", ["action" => "index", $currentTable], ["class" => "button"]) ?>
	</div>

	<?= $this->Form->end(); ?>
</section>

<script>
	window.addEventListener("load", () => {
		const saveButtons = document.querySelectorAll('[name=save]');

		saveButtons.forEach((button) => {
			button.addEventListener('click', async (event) => {
				let form = event.target.closest('form');
				let action = form.getAttribute('action');
				let formData = new FormData(form);
				let data = new URLSearchParams(formData);

				await fetch(action, {
					method: 'post',
					body: data,
				})

				location.reload();
			});
		});
	});
</script>