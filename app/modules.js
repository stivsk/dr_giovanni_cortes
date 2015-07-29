(function(){
	var app = angular.module('spiwer',['ngRoute']);

	app.config(function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl : 'app/components/home/homeView.html',
				controller 	: 'homeController'
			})
			.otherwise({
            	redirectTo: '/'
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



})();