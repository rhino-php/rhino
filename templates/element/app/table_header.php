<tr>
	<?php foreach ($tableColumns as $column) : ?>
		<th scope="col" data-cell="<?= h(ucfirst($column)) ?>">
			<?php $field = $this->app->getField($column) ?>
			<?= $this->Paginator->sort($column, $field->alias ?? $column) ?>
		</th>
	<?php endforeach ?>

	<th align="right" data-cell="Actions"><?= __('Actions') ?></th>
</tr>
