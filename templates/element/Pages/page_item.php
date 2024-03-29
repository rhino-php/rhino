<?php foreach ($pages as $page) : ?>
	<li class="page-item">
		<div class="page-item__body">
			<?= $this->Html->link($page['name'], ['action' => 'layout', $page['id']], ['class' => 'button outline']) ?>

			<div class="page-item__actions">

				<div class="cluster pill">
					<?php
					echo $this->Html->Link($this->Icon->svg('arrow-up'), ['action' => 'moveUp', $page->id], ['escape' => false, 'class' => 'button']);
					echo $this->Html->Link($this->Icon->svg('arrow-down'), ['action' => 'moveDown', $page->id], ['escape' => false, 'class' => 'button']);
					?>
				</div>

				<?php
				$this->start('actions');
				echo $this->element("layout-elements/actions", [
					"view" => [
						"link" => ['action' => 'layout', $page['id']],
						"valid" => in_array('view', $rights)
					],
					"edit" => [
						"link" => ['action' => 'edit', $page['id']],
						"valid" => in_array('edit', $rights)
					],
					"delete" => [
						"link" => ['action' => 'delete', $page['id']],
						"valid" => in_array('delete', $rights),
						"confirm" => __('Are you sure you want to delete # {0}?', $page['name']),
					]
				]);

				$this->end();
				?>
				<?= $this->fetch('actions'); ?>
			</div>

		</div>

		<?php if (!empty($page['children'])) : ?>
			<ul>
				<?= $this->element('Pages/page_item', [
					'pages' => $page['children']
				]) ?>
			</ul>
		<?php endif ?>
	</li>
<?php endforeach ?>