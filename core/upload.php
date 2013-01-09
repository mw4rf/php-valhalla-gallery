<?php
if(!isset($_POST) or empty($_POST))
{
	header("Location: ../index.php");
	die();
}

include_once('config.inc.php');
include_once('functions.inc.php');

//echo print_r($_POST); echo print_r($_FILES); die();

// Validating form data
if(empty($_POST['title']))
	die("Title must not be empty");
if(empty($_FILES['image']['tmp_name']))
	die("You must choose a file to upload");

// Extracting form data
$title = addslashes(c($_POST['title'],'db'));
$description = addslashes(c($_POST['description'],'db'));
$user = addslashes(c($_POST['user'],'db'));
$cat = addslashes(c($_POST['cat'],'db'));

// Allow hotlinking ?
if(!empty($_POST['hotlink']) and $_POST['hotlink'] == "true")
	$hotlink = 1;
else
	$hotlink = 0;

// Extracting & analyzing image
@list($width, $height, $imgtype, $strtag) = getimagesize($_FILES['image']['tmp_name']);

switch($imgtype)
{
	case 1: $ext = 'gif'; break;
	case 2: $ext = 'jpeg'; break;
	case 3: $ext = 'png'; break;
	default: $ext = false; break;
}

if(!$ext) // unknown file format
	die("Unknown file format. Please convert your image to PNG, JPG or GIF.");

$imgdata = file_get_contents($_FILES['image']['tmp_name']);
$imgdata = addslashes($imgdata); // mysql_real_escape_string seems broken on some configurations...

// Connecting database
require_once('config.inc.php');
$db = mysql_connect($dbhost, $dblogin, $dbpassword);
mysql_select_db($dbbase,$db);

// MySQL Query
mysql_query("INSERT INTO $dbimagestable SET title='$title',
	 								description = '$description',
									extension='$ext',
									width='$width',
									height='$height',
									image='$imgdata',
									hotlink='$hotlink',
									category='$cat',
									user='$user',
									add_date='".date('Y-m-d H:i:s')."'");

header("Location: ../index.php");




?>