<?php
require_once('core/config.inc.php');
require_once('core/functions.inc.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

	<title><?php echo $site_name; ?></title>
	<link rel="stylesheet" href="styles/core.css" type="text/css" media="screen" />
	<!--// jQuery Main -->
	<script type="text/javascript" src="lib/jquery.js"></script>
	<!--// jQuery Overlay & Tooltips -->
	<script type="text/javascript" src="lib/jquery.tools.js"></script>
	<!--// jQuery Autocomplete -->
	<script type='text/javascript' src='lib/jquery.autocomplete/jquery.bgiframe.min.js'></script>
	<script type='text/javascript' src='lib/jquery.autocomplete/jquery.ajaxQueue.js'></script>
	<script type='text/javascript' src='lib/jquery.autocomplete/thickbox-compressed.js'></script>
	<link rel="stylesheet" href="lib/jquery.autocomplete/thickbox.css" type="text/css" media="screen" />
	<script type='text/javascript' src='lib/jquery.autocomplete/jquery.autocomplete.pack.js'></script>
	<link rel="stylesheet" href="lib/jquery.autocomplete/jquery.autocomplete.css" type="text/css" media="screen" />
	<!--// Gallery : Actions triggered on page load -->
	<script type="text/javascript" src="js/pageload.js"></script>
	<!--// Gallery : AJAX Form Actions -->
	<script type="text/javascript" src="js/actions.js"></script>
</head>

<body>

<!--// Form to UPLOAD images -->
<?php require_once('core/upload_form.php'); ?>

<header>
	<?php echo $site_name; ?>
</header>

<!--// Images LIST -->
<thumbnails>
<?php require_once('core/list.php'); ?>
</thumbnails>

<!--// Sidebar -->
<sidebar>
<?php require_once('core/sidebar.php'); ?>
</sidebar>

</body>
</html>
