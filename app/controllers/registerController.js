(function() {
    
    //var RegisterController = function ($scope, $log, $window, registerFactory, $routeParams) {
    var RegisterController = function ($scope, $log, $window, $routeParams) {
		// modCode describes the various ways the registration from can be altered
        //var modCode = $routeParams.modificationCode;
        
        function init() {
        }
        
        init();
    };
    
    //RegisterController.$inject = ['$scope', '$log', '$window', 'registerFactory'];
    RegisterController.$inject = ['$scope', '$log', '$window', '$routeParams'];

    angular.module('demoApp')
		.controller('RegisterController', RegisterController);
    
}());