<section>
	<h1>Rename Group</h1>
	
	<?= $this->Form->create($entity, ["class" => "stack"]); ?>
		<?= $this->Form->control('name') ?>
	
		<div class="cluster">
			<?= $this->Form->button('Save') ?>
			<?= $this->Html->link("Back", $this->Rhino->backLink(), ["class" => "button"]) ?>
		</div>
		
	<?= $this->Form->end(); ?>
</section>