<?php
	$cakeDescription = 'Tusk';
?>

<?= $this->Html->charset() ?>

<meta name="viewport" content="width=device-width, initial-scale=1">

<title>
	<?= $cakeDescription ?>:
	<?= $this->fetch('title') ?>
</title>

<?= $this->Html->meta(
    'favicon.ico',
    '/favicon.ico',
    ['type' => 'icon']
); ?>

<?= $this->Html->css([
	'webfonts',
	'main'
]) ?>

<?= $this->Html->script([
	'main'
], ['type' => 'module']) ?>

<?= $this->fetch('meta') ?>
<?= $this->fetch('css') ?>
<?= $this->fetch('script') ?>

<!--  Essential META Tags -->
<meta property="og:title" content="<?= $this->fetch('title') ?>">
<!-- <meta property="og:type" content="" />
<meta property="og:image" content="">
<meta property="og:url" content="">
<meta name="twitter:card" content=""> -->

<!--  Non-Essential, But Recommended -->
<meta property="og:site_name" content="<?= $this->fetch('title') ?>">

<script type="module">
	document.documentElement.classList.remove('no-js');
	document.documentElement.classList.add('js');
</script>

<!-- Fail save for when JS is not working -->
<script>
	window.onload = function() {
		setTimeout(() => {
			document.body.classList.add('page-has-loaded');
		}, 3000);
	}
</script>