(function() {

    var app = angular.module('demoApp', ['ngRoute', 'ngAnimate']);
    
	// rootScope variables
	app.run(function($rootScope){
		// variables for header menu
		$rootScope.menu = {};
		$rootScope.menu.state = false; // to track when user clicked the menu icon
		$rootScope.menu.userClicked = false;
	});
	
    // routing/controller definitions
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: '/app/views/home/homeViewLoader.html'
                })
            .when('/register', {
                controller: 'RegisterController',
		  		//controller: 'RegisterController/:modificationCode',
                templateUrl: '/app/views/register.html'
                })
            .otherwise({ redirectTo: '/' });
    });

})();