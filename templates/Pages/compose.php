<?php
$this->Html->css('Rhino.main', ['block' => true]);
$this->Html->script('Rhino.main', ['block' => true]);
$this->Html->meta('csrfToken', $this->request->getAttribute('csrfToken'), ['block' => true]);
?>

<section class="inner-bound">
	<h1>
		<?= __(ucfirst($action)) ?> Page
	</h1>

	<?= $this->Form->create($entry, ["class" => "stack"]) ?>
	<fieldset class="stack-200">
		<?= $this->Rhino->sectionHeader("Settings") ?>
		<?= $this->Form->control('name', ["required"]); ?>
		<?= $this->Form->control('parent_id', [
			'options' => $pages,
			'escape' => false,
			'empty' => '-- New Root --',
		]); ?>
		<?= $this->Form->control('role', [
			'default' => 0,
			'empty' => false,
		]); ?>
		
		<?= $this->Form->control('template_id', [
			'options' => $templates,
			'default' => 1,
			'empty' => false,
		]); ?>
		<?= $this->Form->control('active', ['role' => 'switch']); ?>
	</fieldset>

	<div class="grid">
		<?= $this->Icon->link('arrow-left', __('Back'), ['action' => 'index'], ['class' => 'button contrast outline', 'reverse' => true]); ?>
		<?= $this->Icon->button('save', __('Save'), ['type' => 'submit', 'reverse' => true]) ?>
	</div>

	<?= $this->Form->end(); ?>
</section>