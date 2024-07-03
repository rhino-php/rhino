<?php

/**
 * @var \App\View\AppView $this
 * @var iterable<\Cake\Datasource\EntityInterface> $tables
 */
$this->append('app_header', $this->element('app/filter', [
		'table' => $tableName,
		'options' => $columns,
	]));

?>
<section class="tables stack">
	<div class="app-header">
		<?= $this->fetch('app_header') ?>
	</div>

	<figure>
		<table role="grid">
			<caption class="caption"><?= __($this->app->alias) ?></caption>
			<?php
				$tableColumns = $columns;
				
				if (!empty($this->app->overView)) {
					$tableColumns = $this->app->overView;
				}
			?>

			<thead>
				<?= $this->element('app/table_header', ['tableColumns' => $tableColumns]) ?>
			</thead>

			<tbody>
				<?= $this->element('app/table_body', ['tableColumns' => $tableColumns]) ?>
			</tbody>
		</table>
	</figure>

	<div class="cluster pill">
		<?php
		if (in_array('add', $rights)) {
			$newButton = $this->Icon->svg("Rhino.plus") . '<span>' . __('New Entry') . '</span>';
			echo $this->Html->link($newButton, ['action' => 'add', $tableName], ['escape' => false, 'class' => 'button icon-button']);
		} ?>

		<?= $this->Html->link($this->Icon->svg("Rhino.download") . '<span>' . __('Export to CSV') . '</span>', ['action' => 'export', $tableName], ['escape' => false, 'class' => 'button icon-button', 'download' => $tableName . '.csv']); ?>
	</div>

	<?= $this->element('pagination') ?>
</section>