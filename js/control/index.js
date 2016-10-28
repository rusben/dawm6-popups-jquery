$(document).ready(function() {
	var myWindow;
	
	$("#openWindow").click(function(){
		myWindow = window.open("http://www.proven.cat", "_blank", "width=200,height=100");
	});
	
	$("#closeWindow").click(function(){
		myWindow.close();
	});
	
	$("#focusWindow").click(function(){
		myWindow.focus();
	});
	
	$("#openConstructWindow").click(function(){
		window.open("popUpWindows/popUpWindow.html");
	});
		
});
