<?php
if(file_exists("lang/$site_language.lang.php")) require_once("lang/$site_language.lang.php");
elseif(file_exists("../lang/$site_language.lang.php")) require_once("../lang/$site_language.lang.php");
else die();

function s($text)
{	
	global $localeString;
	
	if(isset($localeString[$text]))
		echo $localeString[$text];
	else
		echo "?";
}

function g($text)
{
	global $localeString;
	
	if(isset($localeString[$text]))
		return $localeString[$text];
	else
		return "?";
}

function imgurl() 
{
	/*
	// Kinda buggy with all those includes... generates wrong URL like http://myserv.com/core/image.php?id...
	$url = "http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
	$url = str_replace("index.php","",$url);
	$url .= "image.php";
	*/
	
	global $siteroot;
	return $siteroot."image.php";
	
}

function fdatetime($datetime,$format=false)
{
	$annees = substr($datetime,0,4);
	$mois = substr($datetime,5,2);
	$jours = substr($datetime,8,2);
	$heures = substr($datetime,11,2);
	$minutes = substr($datetime,14,2);
	$secondes = substr($datetime,17,2);
	
	if(!$format)
		$format = "d M - H:i:s";
	
	return date($format, mktime($heures,$minutes,$secondes,$mois,$jours,$annees));
}

/*
* Nom : getFDate()
* But : retourne une partie d'une valeur date créée par PHP avec la fonction date()
* Info : Guillaume Florimond, 15/03/2008
* Param 1 : $valeur : la date PHP à traiter
* Param 2 : $operateur : la partie à extraire
* Param 2 : $operateur peut être 's' (seconde), 'i' (minutes), 'H' (heures), 'd' (jours), 'm' (mois) ou 'Y' (années)
*/
function getFDate($valeur,$operateur)
{
	switch($operateur)
	{
		// Secondes
		case 's': $res = substr($valeur, 17, 2); break;
		// Minutes
		case 'i': $res = substr($valeur, 14, 2); break;
		// Heures
		case 'H': $res = substr($valeur, 11, 2); break;
		// Jours
		case 'd': $res = substr($valeur, 8, 2); break;
		// Mois
		case 'm': $res = substr($valeur, 5, 2); break;
		// Années
		case 'Y': $res = substr($valeur, 0, 4); break;
		// Par défaut
		default: $res = NULL; break;
	}
	return $res;
}

function c($text,$direction=false)
{
	global $charset_db, $charset_page;
	if($direction == "db")
		return iconv($charset_page, $charset_db, $text);
	else
		return iconv($charset_db, $charset_page, $text);
}

?>