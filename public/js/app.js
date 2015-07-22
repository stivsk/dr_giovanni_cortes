$(document).ready(function(){
		
	$('body').css('overflow','hidden');
	
	setTimeout(function(){
		$('#cover').fadeOut();
		$('body').css('overflow','auto');
	}, 3000);


});