$(document).ready(function(){
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
	      }
	    ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' // this is a default type
	});
});