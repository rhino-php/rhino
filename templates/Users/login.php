<?php $this->assign('title', 'login') ?>

<div class="login">
	<article>
		<div class="center">
			<?= $this->Icon->svg($iconBig) ?>
			<h3 class="sr-only">Login</h3>
		</div>

		<?= $this->Form->create(null, ['class' => 'stack']) ?>
		<fieldset class="stack">
			<?= $this->Form->control('email', ['required' => true]) ?>
			<?= $this->Form->control('password', ['required' => true]) ?>
			<?= $this->Form->control('remember_me', ['type' => 'checkbox', 'role' => 'switch']) ?>
		</fieldset>
		<?= $this->Form->submit(__('Login')); ?>
		<?= $this->Form->end() ?>
	</article>
</div>