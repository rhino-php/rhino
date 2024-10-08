<section class="index stack">
	<h1><?= __('Application-Manager') ?></h1>
	<figure>
		<table role="grid">
			<thead>
				<tr>
					<th colspan="2">Applications</th>
					<th data-cell="Actions" align="right">Actions</th>
				</tr>
			</thead>

			<tbody>
				<?php if (empty($groups)): ?>
					<tr>
						<td colspan="3" align="center">
							No Applications found.
						</td>
					</tr>
				<?php endif ?>

				<?php foreach ($groups as $group): ?>
					<tr>
						<td data-cell="Group" colspan="2"><b><?= $group['name'] ?></b></td>
						<td data-cell="Actions">
							<?php if (isset($group['id'])): ?>
								<?php
								$this->start('actions');
								echo $this->element("layout-elements/actions", [
									"edit" => [
										"link" => ['action' => 'renameGroup', $group['id']],
										"valid" => in_array('edit', $rights)
									],
									"delete" => [
										"link" => ['action' => 'deleteGroup', $group['id']],
										"valid" => in_array('edit', $rights),
										"confirm" => __('Are you sure you want to delete the group: {0}?', $group['name']),
									],
								]);
								$this->end();
								?>
								<?= $this->fetch('actions'); ?>
							<?php endif ?>
						</td>
					</tr>
					<?php foreach ($group->applications as $app): ?>
						<tr>
							<td data-cell="Application">					
								<?= $this->Html->link(
									sprintf('%s [%s]', $app->alias, $app->name),
									$app->link,
									['class' => 'button outline']
								); ?>
							</td>
							<td data-cell="Actions" colspan="2">
								<?php
								$actions = [
									$this->ActionButton->link('Rhino.table', ['controller' => 'fields', 'action' => 'index', $app->name], __('Edit fields')),
									$this->ActionButton->link('Rhino.edit', ['action' => 'edit', $app->name]),
									$this->ActionButton->postLink('Rhino.trash', ['action' => 'delete', $app->name], options: [
											'confirm' => __('Are you sure you want to delete: {0}?', $app->name),
											'title' => __('Delete entry'),
										]
									)
								];

								if (!$app->has_table) {
									unset($actions[0]);
								}

								echo $this->element('action-area', [
									'actions' => $actions
								]);
								?>
							</td>
						</tr>
					<?php endforeach ?>
				<?php endforeach ?>


				<?php if ($this->Identity->get('role_id') === '1'): // admin ?>
					<tr>
						<td colspan="3">
							<details>
								<summary>Rhino Tables</summary>
								<dl class="stack">
									<?php foreach ($rhinoTables as $table): ?>
										<div class="cluster cluster--shrink">
											<dd class="pill">
												<?php
												$this->start('actions');
												echo $this->element("layout-elements/actions", [
													"view" => [
														"link" => ["controller" => "Applications", "action" => 'view', $table],
														"valid" => in_array('view', $rights)
													],
													'edit' => [
														"link" => ['controller' => 'Fields', 'action' => 'index', $table],
														"valid" => in_array('edit', $rights)
													]
												]);
												$this->end();
												?>

												<?= $this->fetch('actions'); ?>
											</dd>
											<dt>
												<?= $this->Html->link(
													$table,
													["controller" => "Tables", "action" => 'index', $table],
													['class' => 'button outline']
												) ?>
											</dt>

										</div>
									<?php endforeach ?>
								</dl>
							</details>
						</td>
					</tr>
				<?php endif ?>
			</tbody>
		</table>
	</figure>

	<div class="cluster pill">
		<?= $this->Html->link("Create new Table", ["action" => "add"], ["class" => "button"]) ?>
		<?= $this->Html->link("Create new Group", ["action" => "newGroup"], ["class" => "button"]) ?>
	</div>
</section>