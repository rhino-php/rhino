<?php
/**
 * @var \App\View\AppView $this
 * @var iterable<\Cake\Datasource\EntityInterface> $templates
 */

$this->Html->css('Rhino.main', ['block' => true]);
$this->Html->script('Rhino.main', ['block' => true]);
$this->Html->meta('csrfToken', $this->request->getAttribute('csrfToken'), ['block' => true]);
?>

<section class="templates index content stack-400">
	<div>
		<?= $this->Icon->link('plus', __('New'), ['action' => 'add'], ['class' => 'button float-right', 'reverse' => true]) ?>
		<h3><?= __('Templates') ?></h3>
	</div>
    <div class="table-responsive">
        <table class="striped">
            <thead>
                <tr>
                    <th><?= $this->Paginator->sort('name') ?></th>
                    <th><?= $this->Paginator->sort('template_type') ?></th>
                    <th><?= $this->Paginator->sort('created') ?></th>
                    <th><?= $this->Paginator->sort('modified') ?></th>
					<th><?= $this->Paginator->sort('active') ?></th>
                    <th class="actions"><?= __('Actions') ?></th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($templates as $row => $template): ?>
                <tr id="<?= 'table-' . $row ?>">
                    <td><?= h($template->name) ?></td>
                    <td><?= h($template->template_type->name) ?></td>
					 <td><?= h($template->created) ?></td>
					<td><?= h($template->modified) ?></td>
					<td><?= $this->Form->checkbox('active', ['checked' => $template->active, 'disabled' => true, 'role' => 'switch']); ?></td>
                    <td class="actions">
                        <?= $this->Icon->link('Rhino.eye', __('View'), ['action' => 'view', $template->id], ['class' => 'button', 'label' => false]) ?>
                        <?= $this->Icon->link('Rhino.edit', __('Edit'), ['action' => 'edit', $template->id], ['class' => 'button', 'label' => false]) ?>
                        <?= $this->Icon->button('Rhino.trash', __('Delete'), [
							'hx-delete' => $this->Url->build(['action' => 'delete', $template->id]),
							'hx-confirm' => __('Are you sure you want to delete {0}?',$template->name),
							'hx-trigger' => 'click',
							'hx-swap' => 'delete',
							'hx-target' => '#table-' . $row,
							'class' => 'button',
							'label' => false
						]) ?>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <div class="paginator">
        <ul class="pagination">
            <?= $this->Paginator->first('<< ' . __('first')) ?>
            <?= $this->Paginator->prev('< ' . __('previous')) ?>
            <?= $this->Paginator->numbers() ?>
            <?= $this->Paginator->next(__('next') . ' >') ?>
            <?= $this->Paginator->last(__('last') . ' >>') ?>
        </ul>
        <p><?= $this->Paginator->counter(__('Page {{page}} of {{pages}}, showing {{current}} record(s) out of {{count}} total')) ?></p>
    </div>
	<div>
		<?= $this->Icon->link('Rhino.file', __('Manage Pages'), ['controller' => 'Pages', 'action' => 'index'], ['class' => 'button secondary', 'reverse' => true]) ?>
	</div>
</section>
