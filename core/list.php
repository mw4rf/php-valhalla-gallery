<?php
// Connecting database
require_once('config.inc.php');
require_once('functions.inc.php');

$db = mysql_connect($dbhost, $dblogin, $dbpassword);
mysql_select_db($dbbase,$db);

// Pagination
if(isset($_POST['x']) and is_numeric($_POST['x']))
	$x = $_POST['x'];
else
	$x = 0; // $x = LIMIT x,y
	
$z = $number_of_lines * $images_per_line; // $z = number of images to display

$rq = mysql_query("SELECT * FROM $dbimagestable");
$t = mysql_num_rows($rq); // $t = number of images in database


// Search or Sort Query ?
if(isset($_POST['type']) and isset($_POST['param']))
{
	if($_POST['type'] == "date")
	{
		$date = explode("/",$_POST['param']);
		$m = $date[0];
		$y = $date[1];
		$sql = "SELECT * FROM $dbimagestable WHERE YEAR(add_date) = '$y' AND MONTH(add_date) = '$m' ORDER BY id DESC";
		echo "<p id=\"list_title\">".$_POST['param']."</p>";
	}
	elseif($_POST['type'] == "category")
	{
		$param = addslashes($_POST['param']);
		$sql = "SELECT * FROM $dbimagestable WHERE category = '$param' ORDER BY id DESC";
		echo "<p id=\"list_title\">$param</p>";
	}
	elseif($_POST['type'] == "user")
	{
		$param = addslashes($_POST['param']);
		$sql = "SELECT * FROM $dbimagestable WHERE user = '$param' ORDER BY id DESC";
		echo "<p id=\"list_title\">$param</p>";
	}
	else
	{
		$sql = "SELECT * FROM $dbimagestable ORDER BY id DESC";
	}
}
else
{
	$sql = "SELECT * FROM $dbimagestable ORDER BY id DESC";
}

// Pagination 2
if(is_numeric($z))
	$sql .= " LIMIT $x,$z;";
else
	$z = 1;

// SQL QUERY
$query = mysql_query($sql);

// Pagination 3
// $x is stored ix $xa because $x will be changed later
$xa = $x;
// $y is the first record (LIMIT $y,...)
// $z is the threshold (after $z, a new page)
// $x is the number of remaining records to display
	//$y can't be < 0
	$y = $x - $z;
	if($y < 0)
		$y = 0;
	// $x = old $x + threshold $z
	$x = $x + $z;
	// $la is the first record of the last page
	$la = $t-$z;
	// $p is the number of pages
	$p = ceil($t / $z);
	// $c is the current page
	$c = ceil($x / $z);


//echo "$t records on $p pages <br />";

// Pagination combobox
  $co  = "<select id=\"menu_pagination\" "
       ."onchange=\"pagination('combo','0')\">";

for($ix = 1 ; $ix <= $p ; $ix++)
{
	// Current page
	if($ix == $c)
	{
		$co .= "<option selected=\"selected\">$c</option>";
	}
	// Another page
	else
	{
		$xgo = ($ix - 1) * $z;
		$co .= "<option value=\"$xgo\">$ix</option>";
	}
}
$co .= "</select>";

$pagination = "<div id=\"pagination\">";
// if $x>$z, then this is not the first page
if($x > $z) 
	$pagination.= "<a href=\"#\" onclick=\"pagination('null','0')\"><img src=\"images/tostart.gif\" alt=\"to_start\" /></a> "
	 	."<a href=\"#\" onclick=\"pagination('prev','$y')\"><img src=\"images/backward.gif\" alt=\"previous\" /></a>";

// To disable the combo, replace $co by $c
if($p > 1)
	$pagination .= "&nbsp;$co/$p&nbsp;";

//si $x<$t, then this is not the last page
if($x < $t) 
	$pagination .= "<a href=\"#\" onclick=\"pagination('next','$x')\"><img src=\"images/forward.gif\" alt=\"next\" /></a> "
		."<a href=\"#\" onclick=\"pagination('next','$la')\"><img src=\"images/toend.gif\" alt=\"to_end\" /></a>";

$pagination .= "</div>";

if(empty($_POST['type']))
	echo $pagination;
?>


<table width="100%"><tr>
	<?php	
	$num = 0;
	
	while($data = mysql_fetch_assoc($query))
	{
		// Gathering data
		$id = $data['id'];
		$title = stripslashes(c($data['title']));
		$description = stripslashes(c($data['description']));
		$imgW =  $data['width'];
		$imgH = $data['height'];
		
		// Don't divide by zero...
		if(!$imgW) continue;
		
		// Resizing image to make a thumbnail
	    $thumb_height = round($imgH / $imgW * $thumb_width);
		
		// Displaying : new line
		if($num == $images_per_line)
		{
			echo "\n\t</tr>\n\n\t<tr>";
			$num = 0;
		}
		
		// Size in % of the thumb cell
		$cell_width = round(100 / $images_per_line);
		
		// Is hotlink-able ?
		if($data['hotlink'])
			$hotlink = "<p>".g('link')."<br /><i>".imgurl()."?id=$id</i></p>";
		else
			$hotlink = "";
		
		// Meta infos
		$dims = g('dims').": <b>".$data['width']."x".$data['height']." px</b>";
		$adate = g('adate').": <b>".fdatetime($data['add_date'],g('date_format'))."</b>";
		$byuser = g('byuser').": <b>".stripslashes(c($data['user']))."</b>";
		$ext = g('format').": <b>".strtoupper(c($data['extension']))."</b>";
		$cat = g('cat').": <b>".stripslashes(c($data['category']))."</b>";
		
		// Display : tooltip
		$meta = "<b>$title</b> <p>$description</p> <br /><p>$adate<br />$byuser<br />$cat<br />$dims<br />$ext</p><br /> $hotlink";
		
		// Displaying : image 
		echo "\n\t\t
			<td class=\"thumbnail_container\" width=\"$cell_width%\">
				<a class=\"thumb\" id=\"image_$id\" href=\"image.php?id=$id\" title=\"$meta\">
					<img class=\"thumbnail\" height=\"$thumb_height\" width=\"$thumb_width\" src=\"image.php?id=$id\">
				</a>
				<br />
				<span class=\"thumb_title\">$title</span>
				<div id=\"meta_$id\" style=\"display:none;\">$meta</div>
			</td>"; 
		
		$num++;
	}
	?>
</tr>
<!--// Pages -->
<tr>
	<td colspan="<?php echo $images_per_line; ?>" style="text-align:center;">
		<?php
		if(empty($_POST['type']))
		for($i = 1 ; $i <= $p ; $i++)
			if($i == $c)
				echo "$i | ";
			else	
				echo "<a href=\"#\" onclick=\"pagination('page','".($i-1)*$z."')\">$i</a> | ";
		?>
	</td>
</tr>
</table>

<!-- the tooltip --> 
<div class="tooltip" id="thumbtip">&nbsp;</div>

<!-- overlay element --> 
<div class="simple_overlay" id="gallery"> 
    <a class="prev">&#x2190;</a> 
    <a class="next">&#x2192;</a> 
    <div class="info"></div> 
    <img class="progress" src="images/loading.gif" /> 
</div>

<script type="text/javascript" src="js/list.js"></script>