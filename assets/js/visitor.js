$(document).ready(function() {

var lurl = "https://www.1smartrecruiter.com/";

// adding views on index page



$(window).on("load",function()
{

	
$.ajax({  
url: lurl + 'php/countviews.php',  
  success: function(data) {  
   // $("#para").html(data);                
  }  
});  




});

});  