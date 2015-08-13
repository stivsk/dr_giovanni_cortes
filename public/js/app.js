$(document).ready(function(){
		
	$.backstretch("http://drharoldcortes.com/img/back_drharoldcortes.jpg");
	
	window.onload = function(){
		$('#cover').fadeOut();
	};

	var h = $(window).height();
	var w = $(window).width();

	if (w >= 910) {
		$('body').height(h);
	};

	$('.slider-for').slick({
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        fade: true,
	        swipe: true,
	        accessibility: false,
	        arrows: false
	    });
	    $('.single-item').slick({
	    	autoplay: true,
	        slide: 'div',
	        dots: true,
	        speed: 500,
	        arrows: false
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