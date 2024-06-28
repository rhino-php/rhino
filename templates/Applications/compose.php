<section>
	<?= $this->Form->create($entry, ["class" => "stack-400"]); ?>

	<?php if ($action == "edit"): ?>
		<h1>Edit Application: <i><?= $tableName ?></i></h1>
	<?php else: ?>
		<h1>Create new Application</i></h1>
	<?php endif ?>

	<div class="stack-300">
		<div class="cluster-300">
			<?= $this->Form->control('name') ?>
			<?= $this->Form->control('alias') ?>
		</div>

		<?= $this->Form->control('rhino_group_id', [
			"type" => "select",
			"options" => $groups
		]); ?>

		<?= $this->Form->control('active', ["type" => "checkbox"]) ?>

		<?php if (isset($appFields)): ?>
			<?= $this->Rhino->control('overview_fields', [
				'label' => 'Overview Fields',
				"type" => "select",
				"options" => $appFields,
				"multiple" => true,
				'value' => $entry->overviewData
			]) ?>
		<?php endif ?>
	</div>

	<details class="stack">
		<summary>Settings for Custom Apps:</summary>
		<?= $this->Form->control('is_custom', ['label' => 'Use custom Application', "type" => "checkbox", "role" => "switch"]) ?>
		<?= $this->Form->control('has_table', [
			"type" => "checkbox",
			"role" => "switch",
			'disabled' => $action == "edit"
		]) ?>

		<div>
			<h3>Example Controller:</h3>
			<pre><code class="language-php">
				namespace App\Controller;

				use Rhino\Controller\RhinoController;

				class FooController extends RhinoController {
					public function initialize(): void {
						parent::initialize();
					}
					
					public function index() {
						$this->set(['title' => 'Hello']);
					}
				}
			</code></pre>
		</div>
	</details>

	<?= $this->Form->hidden('currentName', ["value" => isset($tableName) ? $tableName : '']) ?>
	<?= $this->Form->hidden('id') ?>

	<div class="pill cluster">
		<?= $this->Form->button('Save Application') ?>
		<?= $this->Html->link("Back", ['action' => 'index'], ["class" => "button"]) ?>
	</div>

	<?= $this->Form->end(); ?>
</section>