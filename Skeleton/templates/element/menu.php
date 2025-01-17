<div class="header__wrapper outer-bound">
	<a href="<?= $this->Url->build('/') ?>" class="logo cluster">
		<?= $this->Icon->svg('Rhino.logo') ?>
		<span>Rhino</span>
	</a>

	<?= $this->Menu->set(1, [
		'limit' => 0,
		'link' => ['class' => 'button'],
	]) ?>

	<?php $this->append('menu') ?>
	<?php if ($this->Identity->isLoggedIn()): ?>
		<li><?= $this->Html->link('Seiten', [
			'controller' => 'Pages',
			'action' => 'index',
			'prefix' => false,
			'plugin' => null,
		], ['class' => 'button']) ?></li>
		<li><?= $this->Html->link('Products', [
			'controller' => 'Test',
			'action' => 'index',
			'prefix' => 'Admin',
			'plugin' => null,
		], ['class' => 'button']) ?></li>
	<?php endif ?>
	<?php $this->end() ?>

	<?= $this->Menu->fetch() ?>

	<?= $this->Menu->toggleButton('toggle Menu') ?>
</div>