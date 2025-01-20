<?php
/**
 * @var \App\View\AppView $this
 * @var \Cake\Datasource\EntityInterface $template
 */

$this->Html->css('Rhino.main', ['block' => true]);
$this->Html->script('Rhino.main', ['block' => true]);
$this->Html->meta('csrfToken', $this->request->getAttribute('csrfToken'), ['block' => true]);
?>
<section class="row">
    <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Form->postLink(
                __('Delete'),
                ['action' => 'delete', $template->id],
                ['confirm' => __('Are you sure you want to delete # {0}?', $template->id), 'class' => 'side-nav-item']
            ) ?>
            <?= $this->Html->link(__('List Templates'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside>
    <div class="column column-80">
        <div class="templates form content">
            <?= $this->Form->create($template) ?>
            <fieldset class="stack-200">
                <legend><?= __('Edit Template') ?></legend>
                <?php
                    echo $this->Form->control('name');
                    echo $this->Form->control('file');
                    echo $this->Form->control('template_type');
                    echo $this->Form->control('active', ['role' => 'switch']);
                ?>
            </fieldset>
            <?= $this->Form->button(__('Submit')) ?>
            <?= $this->Form->end() ?>
        </div>
    </div>
</section>
