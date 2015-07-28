$(document).ready(function(){
		
	$('body').css('overflow','hidden');
	
	setTimeout(function(){
		$('#cover').fadeOut();
		$('body').css('overflow','auto');
	}, 3000);

	$("body").mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 30);
		event.preventDefault();
	});


});