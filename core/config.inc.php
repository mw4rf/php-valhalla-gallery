<?php

$dbhost = "localhost:/Applications/MAMP/tmp/mysql/mysql.sock"; // Database server address
$dblogin = "root"; // Database username
$dbpassword = "mdp"; // Database password
$dbbase = "vgallerydb"; // Database name
$dbimagestable = "gallery_misc"; // Images table name

// Site root path (not mandatory, but you should fill it anyway)
$siteroot = "http://gallery/"; // dont forget the trailing slash (/)

// Charset
$charset_db = "ISO-8859-1"; // database
$charset_page = "UTF-8"; // web pages

// Site name
$site_name = "My Galleriy";

// Site language
$site_language = 'en'; // en (english) or fr (french)

// How many images on each line in the list view ?
$images_per_line = 2;

// How many lines of images ?
$number_of_lines = 2;

// Thumbnails width
	// in PIXELS
	// height in not necessary, the image will be scaled with its original ratio width/height
$thumb_width = 100;

?>