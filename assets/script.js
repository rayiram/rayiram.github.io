$(document).ready(function()  {
	//toggle alternate color scheme
	$(".lightbulb").click(function() {
		//change lightblub icon color + layout colors
		if ($(".lightbulb").hasClass("light")) {
			$(".lightbulb").removeClass("light");
			$(".lightbulb").addClass("dark");
			$(".lightbulb").css("color", "#F4F4F4");
			$("body").css("background-color", "#1E1E1E");
			$("body").css("color", "#F4F4F4");
			$("h1").css("color", "#F4F4F4");
			$("h2").css("color", "#F4F4F4");
			localStorage.dark = "true";
		}
		else {
			$(".lightbulb").removeClass("dark");
			$(".lightbulb").addClass("light");
			$(".lightbulb").css("color", "#1E1E1E");
			$("body").css("background-color", "#F4F4F4");
			$("body").css("color", "#1E1E1E");
			$("h1").css("color", "#1E1E1E");
			$("h2").css("color", "#1E1E1E");
			localStorage.dark = "";
		}
	});
});
