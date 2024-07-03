<?= $this->Form->create(null, [
	'url' => [
		'action' => 'setFilter',
		$table
	], 'type' => 'post', 'class' => 'grid'
])
	?>

<div class="grid">
	<?= $this->Form->select("field", $options, ['value' => $field]) ?>
	<?= $this->Form->select("operator", $operators, ['value' => $operator]) ?>
	<?= $this->Form->input("query", ['value' => $query]) ?>
	
	<div class="cluster pill">
		<?= $this->Form->button("Filter") ?>
		<?= $this->Html->Link(
			'clear Filter',
			[
				'action' => 'clearFilter',
				$table
			],
			['class' => 'button']
		)
			?>
	</div>
</div>

<?= $this->Form->end() ?>