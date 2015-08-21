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

	//MAGNIFIC POP-UP
	$('#open-popup').magnificPopup({
    items: [
      {
        src: 'http://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Peter_%26_Paul_fortress_in_SPB_03.jpg/800px-Peter_%26_Paul_fortress_in_SPB_03.jpg',
        title: 'Peter & Paul fortress in SPB'
      },
      {
        src: 'http://vimeo.com/123123',
        type: 'iframe' // this overrides default type
      },
      {
        src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
        type: 'inline'
      },
      {
        src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
        type: 'inline'
      },
      {
        src: '#my-popup', // CSS selector of an element on page that should be used as a popup
        type: 'inline'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
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