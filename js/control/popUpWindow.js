$(document).ready(function() {
	
	var selectsNumber = window.opener.$("#selectsNumber").val();
	var numberRange = window.opener.$("#numberRange").val();

	var divContent = "";
	for (var i = 0; i < selectsNumber ; i++) {
		divContent += '<select class="ranges">';
		for (var j = 0; j <= numberRange ; j++) {
			divContent += '<option value="'+ j +'">'+ j +'</option>';
		}
		divContent += "</select>";
	}
	
	divContent += '<button id="addNumbers">Add numbers</button>';
	$("#content").html(divContent);
	
	$("#addNumbers").click(function(){
		var total = 0;
		$(".ranges").each(function() {  
			total += parseInt($(this).val());
		});
	
		window.opener.$("#result").val(total);	
	});
	
});
















