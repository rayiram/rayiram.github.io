$(document).ready(function()  {
	//picture hover
	// jQuery Function Number #1
	$(".pic").hover(function () {
    	$(this).animate({'opacity':'1'}, 100);
	},
	function (){
	   $(this).animate({'opacity':'.8'}, 100);
	});

	//toggle alternate color scheme
	// jQuery Function Number #2
	$(".lightbulb").click(function() {
		//change lightblub icon color + layout colors
		// jQuery Function Number #3
		if ($(".lightbulb").hasClass("light")) {
			// jQuery Function Number #4
			$(".lightbulb").removeClass("light");
			// jQuery Function Number #5
			$(".lightbulb").addClass("dark");
			// jQuery Function Number #6
			$(".lightbulb").css("color", "#F4F4F4");
			$("body").css("background-color", "#1E1E1E");
			$("body").css("color", "#F4F4F4");
			$("h1").css("color", "#F4F4F4");
			$("h2").css("color", "#F4F4F4");
			localStorage.light = "";
		}
		else {
			$(".lightbulb").removeClass("dark");
			$(".lightbulb").addClass("light");
			$(".lightbulb").css("color", "#1E1E1E");
			$("body").css("background-color", "#F4F4F4");
			$("body").css("color", "#1E1E1E");
			$("h1").css("color", "#1E1E1E");
			$("h2").css("color", "#1E1E1E");
			localStorage.light = "true";
		}
	});

	//trigger animation to fadeOut elements 
	// on page when switching pages
});
