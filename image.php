<?php
if(!isset($_GET['id']) or empty($_GET['id']))
	header("Location: index.php");

// Get image ID in database
$id = intval($_GET['id']);

// Connecting database
require_once('core/config.inc.php');
$db = mysql_connect($dbhost, $dblogin, $dbpassword);
mysql_select_db($dbbase,$db);

// Loading image
$r = mysql_fetch_row(mysql_query("SELECT image,extension FROM $dbimagestable WHERE id = '$id'"));

// Displaying
header('Content-type: image/'.$r[1]);
echo $r[0];
?>