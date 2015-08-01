(function(){
	var app = angular.module('spiwer',['ngRoute']);

	app.config(function($routeProvider){
		$routeProvider
			.when('/faciales',{
				templateUrl	: 'app/components/faciales/facialesView.html',
				controller 	: 'facialesController'
			})
			.when('/corporales', {
				templateUrl : 'app/components/corporales/corporalesView.html',
				controller 	: 'corporalesController'
			})
			.when('/ubicacion', {
				templateUrl : 'app/components/ubicacion/ubicacionView.html',
				controller  : 'ubicacionController'
			})
			.when('/preguntas', {
				templateUrl : 'app/components/preguntas/preguntasView.html',
				controller  : 'preguntasController'
			})
			.when('/antes-despues', {
				templateUrl : 'app/components/antes-despues/antes-despuesView.html',
				controller  : 'antes-despuesController'
			})
			.when('/certificaciones', {
				templateUrl : 'app/components/certificaciones/certificacionesView.html',
				controller  : 'certificacionesController'
			})
			.when('/fanpage', {
				templateUrl : 'app/components/fanpage/fanpageView.html',
				controller  : 'fanpageController'
			});
	});

	app.controller('homeController', function(){
		this.name = name;
		this.presentation = presentation;
		this.cover_description = cover_description;
	});

	app.controller('coverController', function(){
		this.cover_title = cover_title;
		this.cover_description = cover_description;
	});

	app.controller('menuController', function(){
		this.buttons = menu_buttons;
	});

	app.controller('facialesController', function(){
		this.nameController = F_nameController;
		this.procedimientos = procedimientosFaciales;
	});

	app.controller('corporalesController', function(){
		this.nameController = C_nameController;
		this.procedimientos = procedimientosCorporales;
	});

	app.controller('ubicacionController', function(){});

	app.controller('preguntasController', function(){
		this.nameController = P_nameController;
		this.pregunta = preguntas;
	});

	app.controller('antes-despuesController', function(){
		this.nameController = AD_nameController;
	});

	app.controller('certificacionesController', function(){
		this.nameController = CE_nameController;
		this.text_content = certificacionesContent;
	})

	app.controller('fanpageController', function(){
		this.nameController = FB_nameController;
	});


})();