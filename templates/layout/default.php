<!doctype html>
<html class="no-js" lang="<?= $local ?>" data-theme="light">

<head>
	<?= $this->element('Rhino.partials/head') ?>
</head>

<body class="<?= $this->Rhino->escape($this->fetch('title')) ?>" >
	<a href="#main" class="button skip-link">Navigation Überspringen</a>

	<div class="menu-wrapper">
		<?= $this->element('Rhino.partials/menu') ?>

		<div class=" menu-page">
			<!-- Main header -->
			<?= $this->element('Rhino.partials/header') ?>

			<main id="main" class="main-content">
				<?= $this->fetch('content') ?>

				<div id="flash-messages" class="flash-messages">
					<?= $this->Flash->render() ?>
				</div>
			</main>

			<!-- Main footer -->
			<?= $this->element('Rhino.partials/footer') ?>
		</div>
	</div>

</body>

</html>