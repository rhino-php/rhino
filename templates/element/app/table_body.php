<?php foreach ($data as $entry): ?>
	<tr>
		<?php foreach ($tableColumns as $column): ?>
			<td data-cell="<?= h(ucfirst($column)) ?>">
				<?= $this->Field->displayField($column, $entry) ?>
			</td>
		<?php endforeach ?>

		<td class="actions" data-cell="Actions">
			<?php
			$this->start('actions');
			echo $this->element("layout-elements/actions", [
				"view" => [
					"link" => ['action' => 'view', $tableName, $entry->id],
					"valid" => in_array('view', $rights)
				],
				"edit" => [
					"link" => ['action' => 'edit', $tableName, $entry->id],
					"valid" => in_array('edit', $rights)
				],
				"delete" => [
					"link" => ['action' => 'delete', $tableName, $entry->id],
					"valid" => in_array('edit', $rights),
					"confirm" => __('Are you sure you want to delete # {0}?', $entry->id),
				],
			]);
			$this->end();
			?>
			<?= $this->fetch('actions'); ?>
		</td>
	</tr>
<?php endforeach; ?>
