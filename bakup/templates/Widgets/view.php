<?php
/**
 * @var \App\View\AppView $this
 * @var \Cake\Datasource\EntityInterface $widget
 */
?>
<section class="row">
    <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Html->link(__('Edit Widget'), ['action' => 'edit', $widget->id], ['class' => 'side-nav-item']) ?>
            <?= $this->Form->postLink(__('Delete Widget'), ['action' => 'delete', $widget->id], ['confirm' => __('Are you sure you want to delete # {0}?', $widget->id), 'class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('List Widgets'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('New Widget'), ['action' => 'add'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside>
    <div class="column column-80">
        <div class="widgets view content">
            <h3><?= h($widget->name) ?></h3>
            <table>
                <tr>
                    <th><?= __('Name') ?></th>
                    <td><?= h($widget->name) ?></td>
                </tr>
                <tr>
                    <th><?= __('Template') ?></th>
                    <td><?= h($widget->template) ?></td>
                </tr>
                <tr>
                    <th><?= __('Id') ?></th>
                    <td><?= $this->Number->format($widget->id) ?></td>
                </tr>
                <tr>
                    <th><?= __('Widget Category Id') ?></th>
                    <td><?= $widget->widget_category_id === null ? '' : $this->Number->format($widget->widget_category_id) ?></td>
                </tr>
                <tr>
                    <th><?= __('Position') ?></th>
                    <td><?= $widget->position === null ? '' : $this->Number->format($widget->position) ?></td>
                </tr>
                <tr>
                    <th><?= __('Created') ?></th>
                    <td><?= h($widget->created) ?></td>
                </tr>
                <tr>
                    <th><?= __('Modified') ?></th>
                    <td><?= h($widget->modified) ?></td>
                </tr>
            </table>
            <div class="text">
                <strong><?= __('Description') ?></strong>
                <blockquote>
                    <?= $this->Text->autoParagraph(h($widget->description)); ?>
                </blockquote>
            </div>
        </div>
    </div>
</section>
