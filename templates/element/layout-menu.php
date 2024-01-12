<div class="layout-menu">
	<?= $this->Html->link($this->Icon->svg("Rhino.arrow-left"), [
			'action' => 'index'
		], [
			'class' => 'layout-button',
			'escape' => false,
			'title' => __("Back"),
		]) ?>
	
	<p>Editing: <?= $this->Layout->pageLink($page['id'], ['target' => '_blank']) ?></p>

	<?= $this->Form->button($this->Icon->svg("Rhino.save"), [
		'escapeTitle' => false,
		'title' => __("Save"),
		'name' => 'save',
		'class' => 'layout-button'
	]) ?>
</div>