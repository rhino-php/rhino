<?php
/**
 * @var \App\View\AppView $this
 * @var iterable<\Cake\Datasource\EntityInterface> $widgets
 */
?>
<section class="widgets index content">
    <?= $this->Html->link(__('New Widget'), ['action' => 'add'], ['class' => 'button float-right']) ?>
    <h3><?= __('Widgets') ?></h3>
    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th><?= $this->Paginator->sort('id') ?></th>
                    <th><?= $this->Paginator->sort('name') ?></th>
                    <th><?= $this->Paginator->sort('template') ?></th>
                    <th><?= $this->Paginator->sort('widget_category_id') ?></th>
                    <th><?= $this->Paginator->sort('position') ?></th>
                    <th><?= $this->Paginator->sort('created') ?></th>
                    <th><?= $this->Paginator->sort('modified') ?></th>
                    <th class="actions"><?= __('Actions') ?></th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($widgets as $widget): ?>
                <tr>
                    <td><?= $this->Number->format($widget->id) ?></td>
                    <td><?= h($widget->name) ?></td>
                    <td><?= h($widget->template) ?></td>
                    <td><?= $widget->widget_category_id === null ? '' : $this->Number->format($widget->widget_category_id) ?></td>
                    <td><?= $widget->position === null ? '' : $this->Number->format($widget->position) ?></td>
                    <td><?= h($widget->created) ?></td>
                    <td><?= h($widget->modified) ?></td>
                    <td class="actions">
                        <?= $this->Html->link(__('View'), ['action' => 'view', $widget->id]) ?>
                        <?= $this->Html->link(__('Edit'), ['action' => 'edit', $widget->id]) ?>
                        <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $widget->id], ['confirm' => __('Are you sure you want to delete # {0}?', $widget->id)]) ?>
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
</section>
