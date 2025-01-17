<?php foreach ($pages as $page) : ?>
	<li id="page-item-<?= $page->id ?>" class="page-item">
		<div class="page-item__body">
			<?= $this->Html->link($page['name'], ['action' => 'layout', $page['id']], ['class' => 'button outline']) ?>

			<div class="page-item__actions">
				<div class="cluster">
					<?= $this->Icon->link('settings', 'Einstellungen', [
						'action' => 'edit',
						$page->id,
					], [
						'label' => false,
						'class' => 'button'
					]) ?>

					<?= $this->Icon->button('trash', 'Löschen', [
						'label' => false,
						'hx-delete' => $this->Url->build([
							'action' => 'delete',
							$page->id,
						]),
						'hx-trigger' => 'click',
						'hx-swap' => 'delete',
						'hx-target' => '#page-item-' . $page->id,
						'hx-confirm' => __("Are you sure you wish to delete the Page {0}?", $page->name),
					]) ?>
				</div>

				<div class="cluster pill">
					<?= $this->Icon->Link('arrow-up', 'Move Up', ['action' => 'moveUp', $page->id], ['label' => false, 'class' => 'button']) ?>
					<?= $this->Icon->Link('arrow-down', 'Move Down', ['action' => 'moveDown', $page->id], ['label' => false, 'class' => 'button']) ?>
				</div>
			</div>
		</div>

		<?php if (!empty($page['children'])) : ?>
			<ul>
				<?= $this->element('Rhino.page_item', [
					'pages' => $page['children']
				]) ?>
			</ul>
		<?php endif ?>
	</li>
<?php endforeach ?>