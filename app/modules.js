(function(){
	var app = angular.module('spiwer',['ngRoute']);

	  var client_id = '419c0cc3c4864af5b814c53212b4f2d1';
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
					templateUrl	: 'app/components/faciales/rinoplastiaView.html'
				})
				.when('/rejuvenecimiento',{
					templateUrl	: 'app/components/faciales/rejuvenecimientoView.html'
				})
				.when('/eliminacion_de_lineas',{
					templateUrl	: 'app/components/faciales/eliminacion_de_lineasView.html'
				})
				.when('/blefaroplastia',{
					templateUrl	: 'app/components/faciales/blefaroplastiaView.html'
				})
				.when('/mentoplastia',{
					templateUrl	: 'app/components/faciales/mentoplastiaView.html'
				})
				.when('/otoplastia',{
					templateUrl	: 'app/components/faciales/otoplastiaView.html'
				})
				.when('/botox',{
					templateUrl	: 'app/components/faciales/botoxView.html'
				})
				.when('/implantes_liquidos',{
					templateUrl	: 'app/components/faciales/implantes_liquidosView.html'
				})
				.when('/implantes_faciales',{
					templateUrl	: 'app/components/faciales/implantes_facialesView.html'
				})
				.when('/maquillaje_permanente',{
					templateUrl	: 'app/components/faciales/maquillaje_permanenteView.html'
				})
				//FIN RUTAS DE PROC. FACIALES
			.when('/corporales', {
				templateUrl : 'app/components/corporales/corporalesView.html',
				controller 	: 'corporalesController'
			})
				//RUTAS DE PROC. CORPORALES
				.when('/lipoescultura', {
					templateUrl : 'app/components/corporales/lipoesculturaView.html'
				})
				.when('/gluteoplastia', {
					templateUrl : 'app/components/corporales/gluteoplastiaView.html'
				})
				.when('/levantamiento_de_senos', {
					templateUrl : 'app/components/corporales/levantamiento_de_senosView.html'
				})
				.when('/mamoplastia_de_aumento', {
					templateUrl : 'app/components/corporales/mamoplastia_de_aumentoView.html'
				})
				.when('/mamoplastia_de_reduccion', {
					templateUrl : 'app/components/corporales/mamoplastia_de_reduccionView.html'
				})
				.when('/abdominoplastia', {
					templateUrl : 'app/components/corporales/abdominoplastiaView.html'
				})
				.when('/cirugia_de_pantorrilla', {
					templateUrl : 'app/components/corporales/cirugia_de_pantorrillaView.html'
				})
				.when('/carboxiterapia', {
					templateUrl : 'app/components/corporales/carboxiterapiaView.html'
				})
				.when('/escleroterapia', {
					templateUrl : 'app/components/corporales/escleroterapiaView.html'
				})
				//FIN RUTAS DE PROC. CORPORALES
			.when('/ubicacion', {
				templateUrl : 'app/components/ubicacion/ubicacionView.html'
			})
			.when('/preguntas', {
				templateUrl : 'app/components/preguntas/preguntasView.html',
				controller  : 'preguntasController'
			})
			.when('/certificaciones', {
				templateUrl : 'app/components/certificaciones/certificacionesView.html'
			})
			.when('/fanpage', {
				templateUrl : 'app/components/fanpage/fanpageView.html'
			})
			.when('/twitter', {
				templateUrl : 'app/components/twitter/twitterView.html'
			})
			.when('/instagram', {
				templateUrl : 'app/components/instagram/instagramView.html'
			})
			.when('/contacto', {
				templateUrl : 'app/components/contacto/contactoView.html'
			});
	});

	//CONTROLADORES
	
	app.controller('homeController', function(){
		this.name = name;
		this.description = description;
	});

	app.controller('ShowImages', function($scope, InstagramAPI){
		$scope.data = {};
		$scope.pics = [];

		InstagramAPI.fetchPhotos(function(data){
			$scope.pics = data;
		});
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

	app.controller('preguntasController', function(){
		this.nameController = P_nameController;
		this.pregunta = preguntas;
	});

})();