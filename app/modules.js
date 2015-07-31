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



})();