(function(){

	var homeFactory = function() {
		// VARIABLES 
		// -----------------
		
		// some data for the 4 preview user profiles 
		var users = [
				{ 
					imageUrl: '/images/homepage/profile11.jpg',
					status: 'Sorry, Ken. It is what it is.',
					profileUrl: 'https://www.boxachox.com/ShowUser_uid_MudsharkBarbie.aspx',
					authorizedForHomepage: true
				},
				{ 
					imageUrl: '/images/homepage/profile22.jpg',
					status: "I'm dreaming of a white mistress...",
					profileUrl: 'https://www.boxachox.com/ShowUser_uid_testguy1.aspx',
					authorizedForHomepage: true
				},
				{ 
					imageUrl: '/images/homepage/profile33.jpg',
					status: "There's such profoundness, to all this brownness!",
					profileUrl: 'https://www.boxachox.com/ShowUser_uid_testgirl3.aspx',
					authorizedForHomepage: true
				},
				{ 
					imageUrl: '/images/homepage/profile44.jpg',
					status: "Yellow fever anyone?!",
					profileUrl: 'https://www.boxachox.com/ShowUser_uid_GitchiYayaDada.aspx',
					authorizedForHomepage: true
				}
			];
		var factory = {};
		
		// FUNCTIONS 
		// -----------------
				
		/* getProfilePreviews()
		Get 4 profiles for display on the homepage
		- user's "authorizedForHomepage" property must be set to true
		*/
		factory.getProfilePreviews = function() {
			var homepageUsers = [];
			for (var i=0; i < 4; i++) {
				if (users[i].authorizedForHomepage)
					homepageUsers.push(users[i]);
			}
			return homepageUsers;
		};
		return factory;	
	};
	
	angular.module('demoApp')
		.factory('homeFactory', homeFactory);
}());