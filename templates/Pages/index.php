<?php
$this->Html->css('Rhino.main', ['block' => true]);
$this->Html->script('Rhino.main', ['block' => true]);
$this->Html->meta('csrfToken', $this->request->getAttribute('csrfToken'), ['block' => true]);
?>

<section class="inner-bound pages">
	<h1 class="caption">Pages</h1>

	<ul class="page-list">
		<?= $this->element('Rhino.page_item', [
			'pages' => $pages
		]) ?>
	</ul>

	<div>
		<?= $this->Icon->link('Rhino.plus', __('New Page'), ['action' => 'add'], ['class' => 'button', 'reverse' => true]) ?>
		<?= $this->Icon->link('Rhino.layout', __('Manage Templates'), ['controller' => 'Templates', 'action' => 'index'], ['class' => 'button secondary', 'reverse' => true]) ?>
	</div>
</section>