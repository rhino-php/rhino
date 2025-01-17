<dialog id="delete" open>
	<article>
		<h2>Are you shure?</h2>
		<p>Do you want to delete Page <code><?= $entry->name ?></code></p>
		<footer class="grid">
			<?= $this->Icon->button('x', 'no', [
				'reverse' => true,
				'class' => 'outline secondary',
				'hx-get' => '#',
				'hx-swap' => 'delete',
				'hx-target' => '#delete'
			]); ?>
			<?= $this->Icon->Link('check', 'yes', [
				'action' => 'delete',
				$entry->id
			], [
				'reverse' => true,
				'class' => 'button outline'
			]); ?>

			<?= $this->Form->postButton('yes', [
				'action' => 'delete',
				$entry->id
			], ['class' => 'button outline']); ?>
		</footer>
	</article>
</dialog>