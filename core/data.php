<?php
// Query control
if(!isset($_GET['data']) or empty($_GET['data'])) die();
switch($_GET['data'])
{
	case 'user': $data = 'user'; break;
	case 'category': $data = 'category'; break;
	default: die(); break;
}

// Connecting database
require_once('config.inc.php');
require_once('functions.inc.php');

$db = mysql_connect($dbhost, $dblogin, $dbpassword);
mysql_select_db($dbbase,$db);

// SQL Query
$sql = "SELECT DISTINCT $data FROM $dbimagestable ORDER BY $data ASC";
$req = mysql_query($sql);
while($d = mysql_fetch_row($req))
	echo c($d[0]) . "\n";

?>