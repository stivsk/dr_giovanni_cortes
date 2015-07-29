$(document).ready(function(){
		
	$('body').css('overflow','hidden');

	$("body").mousewheel(function(event, delta) {
			this.scrollLeft -= (delta * 30);
			event.preventDefault();
		});
	
	setTimeout(function(){
		$('#cover').fadeOut();
		$('body').css('overflow','auto');
	}, 3000);

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


	//MODAL SETTINGS//
	
	$(document).on('click', '.faciales', function(e){
		bootbox.dialog({
			title: faciales_title,
			message : faciales_message,
			onEscape: function() {}
		});
	});
	$(document).on('click', '.corporales', function(e){
		bootbox.dialog({
			title: corporales_title,
			message : corporales_message,
			onEscape: function() {}
		});
	});
	$(document).on('click', '.preguntas', function(e){
		bootbox.dialog({
			title: preguntas_title,
			message : preguntas_message,
			onEscape: function() {}
		});
	});
	$(document).on('click', '.certificaciones', function(e){
		bootbox.dialog({
			title: certificaciones_title,
			message : certificaciones_message,
			onEscape: function() {}
		});
	});
	$(document).on('click', '.antes-despues', function(e){
		bootbox.dialog({
			title: antes_despues_title,
			message : antes_despues_message,
			onEscape: function() {}
		});
	});
	$(document).on('click', '.ubicacion', function(e){
		bootbox.dialog({
			title: ubicacion_title,
			message : ubicacion_message,
			onEscape: function() {}
		});
	});
	$(document).on('click', '.fotos', function(e){
		bootbox.dialog({
			title: fotos_title,
			message : fotos_message,
			onEscape: function() {}
		});
	});
	$(document).on('click', '.contacto', function(e){
		bootbox.dialog({
			size: 'small',
			title: contacto_title,
			message : contacto_message,
			onEscape: function() {}
		});
	});



});