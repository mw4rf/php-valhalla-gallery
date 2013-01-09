<?php
// Connecting database
require_once('core/config.inc.php');
require_once('core/functions.inc.php');
$db = mysql_connect($dbhost, $dblogin, $dbpassword);
mysql_select_db($dbbase,$db);

// Reset sorting
echo "<span onclick=\"list('','')\" style=\"cursor:pointer;\">".g('main_list')."</span><br />";

// List by categories
echo "<br /><u>".g('cat_list')."</u><br />";
$sql = "SELECT COUNT(id) as cid, category as cat FROM $dbimagestable GROUP BY cat ORDER BY cid DESC";
$req = mysql_query($sql);
while($data = mysql_fetch_assoc($req))
{
	$cat = stripslashes(c($data['cat']));
	$cid = $data['cid'];
	
	echo "<span onclick=\"list('category','$cat')\" style=\"cursor:pointer;\">$cat ($cid)</span><br />";
}

// List by users
echo "<br /><u>".g('user_list')."</u><br />";
$sql = "SELECT COUNT(id) as cid, user FROM $dbimagestable GROUP BY user ORDER BY cid DESC";
$req = mysql_query($sql);
while($data = mysql_fetch_assoc($req))
{
	$user = stripslashes(c($data['user']));
	$cid = $data['cid'];
	
	echo "<span onclick=\"list('user','$user')\" style=\"cursor:pointer;\">$user ($cid)</span><br />";
}

// List by add_date
echo "<br /><u>".g('date_list')."</u><br />";
$sql = "SELECT COUNT(id) as cid, DATE(add_date) as dt FROM $dbimagestable GROUP BY MONTH(add_date) ORDER BY dt DESC";
$req = mysql_query($sql);
while($data = mysql_fetch_assoc($req))
{
	$month = getFDate($data['dt'],"m")."/".getFDate($data['dt'],"Y");
	$cid = $data['cid'];
	
	echo "<span onclick=\"list('date','$month')\" style=\"cursor:pointer;\">$month ($cid)</span><br />";
}

?>