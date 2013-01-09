//$(document).ready(function() {
$(window).load(function() {
	
	// Slider menu
	$(function() {
		$(".topMenuAction").click( function() {
		        if ($("#openCloseIdentifier").is(":hidden")) {
		            $("#slider").animate({
		                marginTop: "-141px"
		                }, 500 );
		            $("#topMenuImage").html('<img src="images/upload_open.png"/>');
		            $("#openCloseIdentifier").show();
		        } else {
		            $("#slider").animate({
		                marginTop: "0px"
		                }, 500 );
		            $("#topMenuImage").html('<img src="images/upload_close.png"/>');
		            $("#openCloseIdentifier").hide();
		        }
		    });
	});
	
	// Moving sidebar
	$(function() {
		var p = $("thumbnails").position()
		$("sidebar").css("top",p.top)
		$("sidebar").fadeIn("slow")
	});
	
	// Autocomplete
	$(function() {
		$("#form_user").autocomplete("core/data.php?data=user", {
			width: 260,
			selectFirst: false
		});
		$("#form_cat").autocomplete("core/data.php?data=category", {
			width: 260,
			selectFirst: false
		});
	});
})