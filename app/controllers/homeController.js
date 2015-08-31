(function() {
    
	var HomeController = function ($scope, $log, $window, $rootScope, homeFactory) {
		// VARIABLES 
		// -----------------
		
		// set to true when the page has loaded
		$scope.isPageReady = false;
		
		// paths to homepage's default views (loaded via "app/views/home/homeViewLoader.html")
		$scope.viewPath = { 
			raceToYourTaste: 'app/views/home/raceToYourTaste.html',
			theSpiceOfLife: 'app/views/home/theSpiceOfLife.html'
		};
				
		// homepage preloader properties (the div lives in "app/views/home/homeViewLoader.html")
		$scope.preloader = {
			remove: false, // remove element from DOM
			dofadeAnimation: false // fade out animation 
		};
		
		// object to hold all things related to users
		$scope.users = {};
		$scope.users.previews = []; // array to store data for the 4 profile previews
		$scope.users.previews.dataLoaded = false; // flag to indicate api call success
		$scope.users.previews.selectedIndex; // store the index of any opened/zoomed-in profile preview list item
		$scope.users.previews.isZoomed = false; // save whether a profile preview has been clicked on ('zoomed in')
		//$scope.users.newMembers = [];
		
		// object to contain properties of the 'chocolate box'
		$scope.chocBox = {
			isOpen: false, // stores the state of the chocolate box animation
			enableAnimation: false, // enables the css keyframe animations
			formPath: { // paths to forms that can be loaded inside the chocolate box
				flavour: 'app/views/home/flavourForm.html',
				login: 'app/views/home/loginForm.html',
				password: 'app/views/home/requestPassword.html'				
			}
		};
				
		// EVENTS
		// -----------------
		
		/* onProfilePreviewClick(index)
		Toggles the preview profile animation (zoom in/zoom out)
		- ensures only one profile preview can be zoomed in at a time
		- also enables the closing of a zoomed in profile when the section background is clicked
		@param ($index) Number - the index of the selected list item, provided by Angular 	
		*/
		$scope.onProfilePreviewClick = function(index) {
			var p = $scope.users.previews;
			
			// toggle the profile zoom state
			$scope.users.previews.isZoomed = !$scope.users.previews.isZoomed;
			
			// if the user clicks different profile previews in succession, only allow one to be zoomed in
			if ((index != p.selectedIndex) && (p.selectedIndex !== undefined)) { 
				$scope.users.previews.selectedIndex = index;
				
				// call function again to zoom in on the profile most recently clicked
				if (!$scope.users.previews.isZoomed) $scope.onProfilePreviewClick(index);
			}
			else { $scope.users.previews.selectedIndex = index; }
		};
		
		/* toggleChocolateBoxAnim()
		Toggles the chocolate box animation (open/close the box)
		- function should be called from the following places:
			1) The "What's your flavour?" button on the box - DONE
			2) The close "x" for the box when the box is open - DONE
			3) The "What's your flavour?" header link - INCOMPLETE
			4) The "Sign In" header link - INCOMPLETE
		*/
		$scope.toggleChocolateBoxAnim = function() {
			// if user is opening the box for the first time, enable the animation
			if (!$scope.chocBox.enableAnimation) $scope.chocBox.enableAnimation = true; 
			
			// scroll page up so box is in view
			if (!$scope.chocBox.isOpen) window.scrollTo(0, 284);
			
			// toggle the box animation
			$scope.chocBox.isOpen = !$scope.chocBox.isOpen;
		};
		
		/* toggleMenuState()
		Toggles the header menu open and closed
		*/	
		$rootScope.toggleMenuState = function() {
			// user clicked on the menu icon, set a flag
			if (!$rootScope.menu.userClicked)
				$rootScope.menu.userClicked = true;
			
			// toggle menu state 
			$rootScope.menu.state = !$rootScope.menu.state;
		};
		
		// FUNCTIONS
		// -----------------
		var pageLoadAnimation = function() {
			if ($scope.users.previews.dataLoaded && !$scope.preloader.remove) {		
				$scope.isPageReady = true;
				
				window.setTimeout(function() {
					$scope.$apply(function() {
						
						// fade out preloader
						$scope.preloader.dofadeAnimation = true;

						window.setTimeout(function() {
							$scope.$apply(function() {
								// remove the preloader div from the DOM
								$scope.preloader.remove = true;		
							});						
						}, 300); // to help ensure the fade animation runs, delay the ng-if
					});
				}, 800); // buffer to allow preloader element and 3D CSS to render
			}
		};
		
		// INIT
		// -----------------
        function init() {
			// get users for the homepage preview profiles
            $scope.users.previews = homeFactory.getProfilePreviews();
			
			// api call was a success, preview profile data was loaded 
			$scope.users.previews.dataLoaded = true;					
			
			/*!! homeFactory.getProfilePreviews();
                .success(function(users) {
                    $scope.users.previews = users;
					// api call was a success, data was loaded 
					$scope.users.previews.dataLoaded = true;
                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });*/
			
			// run page load animation
			pageLoadAnimation();
        }
        
        init();
    };
    
    HomeController.$inject = ['$scope', '$log', '$window', '$rootScope', 'homeFactory'];

    angular.module('demoApp')
      .controller('HomeController', HomeController);
    
}());