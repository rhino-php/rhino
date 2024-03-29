
<?php foreach ($navs as $nav) : ?>
	<?php
	if (empty($nav['buttons'])) {
		continue;
	}
	?>

	<div class="nav-block">
		 
		<ul class="nav-block__list">
			<?php foreach ($nav['buttons'] as $button) : ?>
				<?php if (!isset($button['name'])) {
					continue;
				} ?>
				<li class="nav-block__item">

					<?php if (isset($button['link'])) : ?>
						<a <?= $this->Rhino->getCurrent($button['link']) ?> class="button button--icon" href="<?= $this->Url->build($button['link']) ?>">
							<?= $this->Icon->svg($button['icon'] ?: "Rhino.book") ?>
							<span><?= $button['name'] ?></span>
						</a>
					<?php endif ?>

					<?php if (isset($button['buttons'])) : ?>
						<?php
						$check = false;
						foreach ($button['buttons'] as $item) {
							if (!isset($item['link'])) {
								break;
							}

							$check = $this->Rhino->getCurrent($item['link']);

							if ($check) {
								break;
							}
						}
						?>
						<details <?= $check ? 'open' : '' ?>>
							<summary <?= $check ? 'aria-current="page"' : '' ?> class="button button--icon">
								<?= $this->Icon->svg($button['icon'] ?: "Rhino.folder") ?>
								<span><?= $button['name'] ?></span>
							</summary>

							<ul class="nav-block__list">
								<?php foreach ($button['buttons'] as $item) : ?>
									<?php
									if (!isset($item['link'])) {
										continue;
									}
									?>
									<li class="nav-block__item">
										<a <?= $this->Rhino->getCurrent($item['link']) ?> class="button button--icon" href="<?= $this->Url->build($item['link']) ?>">
											<?= $this->Icon->svg($item['icon'] ?: "Rhino.folder") ?>
											<span><?= $item['name'] ?></span>
										</a>
									</li>
								<?php endforeach ?>
							</ul>
						</details>
					<?php endif ?>

				</li>
			<?php endforeach ?>
		</ul>
	</div>
<?php endforeach ?>