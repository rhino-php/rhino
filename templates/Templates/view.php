<?php
/**
 * @var \App\View\AppView $this
 * @var \Cake\Datasource\EntityInterface $template
 */
?>
<div class="row">
    <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Html->link(__('Edit Template'), ['action' => 'edit', $template->id], ['class' => 'side-nav-item']) ?>
            <?= $this->Form->postLink(__('Delete Template'), ['action' => 'delete', $template->id], ['confirm' => __('Are you sure you want to delete # {0}?', $template->id), 'class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('List Templates'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('New Template'), ['action' => 'add'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside>
    <div class="column column-80">
        <div class="templates view content">
            <h3><?= h($template->name) ?></h3>
            <table>
                <tr>
                    <th><?= __('Name') ?></th>
                    <td><?= h($template->name) ?></td>
                </tr>
                <tr>
                    <th><?= __('File') ?></th>
                    <td><?= h($template->file) ?></td>
                </tr>
                <tr>
                    <th><?= __('Template Type') ?></th>
                    <td><?= h($template->template_type->name) ?></td>
                </tr>
                <tr>
                    <th><?= __('Created') ?></th>
                    <td><?= h($template->created) ?></td>
                </tr>
                <tr>
                    <th><?= __('Modified') ?></th>
                    <td><?= h($template->modified) ?></td>
                </tr>
                <tr>
                    <th><?= __('Active') ?></th>
                    <td><?= $template->active ? __('Yes') : __('No'); ?></td>
                </tr>
            </table>
        </div>
    </div>
</div>