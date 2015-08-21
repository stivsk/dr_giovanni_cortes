(function(){
	var app = angular.module('spiwer',['ngRoute']);

	  //Place your own Instagram client_id below. Go to https://instagram.com/developer/clients/manage/ and register your app to get a client ID
	  var client_id = '419c0cc3c4864af5b814c53212b4f2d1';
	   //To get your user ID go to http://jelled.com/instagram/lookup-user-id and enter your Instagram user name to get your user ID
	  var user_id = '1544472723';

	  app.factory("InstagramAPI", ['$http', function($http) {
	    return {
	      fetchPhotos: function(callback){
	        var endpoint = "https://api.instagram.com/v1/users/" + user_id + "/media/recent/?";
	        endpoint += "?count=99";
	        endpoint += "&client_id=" + client_id;
	        endpoint += "&callback=JSON_CALLBACK";
	        $http.jsonp(endpoint).success(function(response){
	          callback(response.data);
	        });
	      }
	    }
	  }]);

	app.config(function($routeProvider){
		$routeProvider
			.when('/faciales',{
				templateUrl	: 'app/components/faciales/facialesView.html',
				controller 	: 'facialesController'
			})
				//RUTAS DE PROC. FACIALES
				.when('/rinoplastia',{
					templateUrl	: 'app/components/faciales/rinoplastiaView.html',
					controller 	: 'facialesController'
				})
				.when('/rejuvenecimiento',{
					templateUrl	: 'app/components/faciales/rejuvenecimientoView.html',
					controller 	: 'facialesController'
				})
				.when('/eliminacion_de_lineas',{
					templateUrl	: 'app/components/faciales/eliminacion_de_lineasView.html',
					controller 	: 'facialesController'
				})
				.when('/blefaroplastia',{
					templateUrl	: 'app/components/faciales/blefaroplastiaView.html',
					controller 	: 'facialesController'
				})
				.when('/mentoplastia',{
					templateUrl	: 'app/components/faciales/mentoplastiaView.html',
					controller 	: 'facialesController'
				})
				.when('/otoplastia',{
					templateUrl	: 'app/components/faciales/otoplastiaView.html',
					controller 	: 'facialesController'
				})
				.when('/botox',{
					templateUrl	: 'app/components/faciales/botoxView.html',
					controller 	: 'facialesController'
				})
				.when('/implantes_liquidos',{
					templateUrl	: 'app/components/faciales/implantes_liquidosView.html',
					controller 	: 'facialesController'
				})
				.when('/implantes_faciales',{
					templateUrl	: 'app/components/faciales/implantes_facialesView.html',
					controller 	: 'facialesController'
				})
				.when('/maquillaje_permanente',{
					templateUrl	: 'app/components/faciales/maquillaje_permanenteView.html',
					controller 	: 'facialesController'
				})
				//FIN RUTAS DE PROC. FACIALES
			.when('/corporales', {
				templateUrl : 'app/components/corporales/corporalesView.html',
				controller 	: 'corporalesController'
			})
				//RUTAS DE PROC. CORPORALES
				.when('/lipoescultura', {
					templateUrl : 'app/components/corporales/lipoesculturaView.html',
					controller 	: 'corporalesController'
				})
				.when('/gluteoplastia', {
					templateUrl : 'app/components/corporales/gluteoplastiaView.html',
					controller 	: 'corporalesController'
				})
				.when('/levantamiento_de_senos', {
					templateUrl : 'app/components/corporales/levantamiento_de_senosView.html',
					controller 	: 'corporalesController'
				})
				.when('/mamoplastia_de_aumento', {
					templateUrl : 'app/components/corporales/mamoplastia_de_aumentoView.html',
					controller 	: 'corporalesController'
				})
				.when('/mamoplastia_de_reduccion', {
					templateUrl : 'app/components/corporales/mamoplastia_de_reduccionView.html',
					controller 	: 'corporalesController'
				})
				.when('/abdominoplastia', {
					templateUrl : 'app/components/corporales/abdominoplastiaView.html',
					controller 	: 'corporalesController'
				})
				.when('/cirugia_de_pantorrilla', {
					templateUrl : 'app/components/corporales/cirugia_de_pantorrillaView.html',
					controller 	: 'corporalesController'
				})
				.when('/carboxiterapia', {
					templateUrl : 'app/components/corporales/carboxiterapiaView.html',
					controller 	: 'corporalesController'
				})
				.when('/escleroterapia', {
					templateUrl : 'app/components/corporales/escleroterapiaView.html',
					controller 	: 'corporalesController'
				})
				//FIN RUTAS DE PROC. CORPORALES
			.when('/ubicacion', {
				templateUrl : 'app/components/ubicacion/ubicacionView.html',
				controller  : 'ubicacionController'
			})
			.when('/preguntas', {
				templateUrl : 'app/components/preguntas/preguntasView.html',
				controller  : 'preguntasController'
			})
			.when('/antes-despues', {
				controller  : 'antes-despuesController'
			})
			.when('/certificaciones', {
				templateUrl : 'app/components/certificaciones/certificacionesView.html',
				controller  : 'certificacionesController'
			})
			.when('/fanpage', {
				templateUrl : 'app/components/fanpage/fanpageView.html',
				controller  : 'fanpageController'
			})
			.when('/twitter', {
				templateUrl : 'app/components/twitter/twitterView.html',
				controller  : 'twitterController'
			})
			.when('/instagram', {
				templateUrl : 'app/components/instagram/instagramView.html',
				controller  : 'instagramController'
			})
			.when('/contacto', {
				templateUrl : 'app/components/contacto/contactoView.html',
				controller  : 'contactoController'
			});
	});

	app.controller('ShowImages', function($scope, InstagramAPI){
		$scope.data = {};
		$scope.pics = [];

		InstagramAPI.fetchPhotos(function(data){
			$scope.pics = data;
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

	app.controller('twitterController', function(){
		this.nameController = TW_nameController;
	});

	app.controller('instagramController', function(){
		this.nameController = IN_nameController;
	});

	app.controller('contactoController', function(){
		this.nameController = CO_nameController;
		this.info = contactoInfo;
	});


})();