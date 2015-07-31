$(document).ready(function(){
		
	$.backstretch("http://drharoldcortes.com/img/back_drharoldcortes.jpg");
	
	$('body').css('overflow','hidden');

	window.onload = function(){
		$('#cover').fadeOut();
		$('body').css('overflow','auto');
	}, 3000;

	$("body").mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 30);
		event.preventDefault();
	});
	

	//VIDEO WRAPPER SETTINGS//
	var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed"),
	$fluidEl = $("figure");

	$allVideos.each(function() {

	  $(this)
	    // jQuery .data does not work on object/embed elements
	    .attr('data-aspectRatio', this.height / this.width)
	    .removeAttr('height')
	    .removeAttr('width');

	});

	$(window).resize(function() {

	  var newWidth = $fluidEl.width();
	  $allVideos.each(function() {

	    var $el = $(this);
	    $el
	        .width(newWidth)
	        .height(newWidth * $el.attr('data-aspectRatio'));

	  });

	}).resize();

});