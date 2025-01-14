<ul>
	<?php foreach ($sidebar as $name => $link): ?>
		<li>
			<?= $this->Html->link($name, $link) ?>
		</li>
	<?php endforeach ?>
</ul>