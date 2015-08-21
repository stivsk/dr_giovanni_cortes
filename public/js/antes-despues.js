$(document).ready(function(){
	//MAGNIFIC POP-UP
	$('#open-popup').magnificPopup({
	    items: [
	      {
	        src: 'public/img/1.jpg',
	        title: '@giovannicortes_cirugiaplastica'
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
	      }
	    ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' // this is a default type
	});
});