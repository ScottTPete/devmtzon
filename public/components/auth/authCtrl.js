var app = angular.module('ecommerce');

app.controller('AuthCtrl', function (authService) {
	var auth = this;
	auth.test = 'auth';
	auth.showRegister = false;
	auth.user = {};

	auth.toggleRegister = function () {
		auth.showRegister = !auth.showRegister;
	}

	auth.register = function () {
		authService.register(auth.user)
			.then(function (message) {
				console.log(message);
			})
			.catch(function (err) {
				console.log(err);
			})
		auth.user = {};

	}

	auth.login = function () {
		authService.login(auth.user)
			.then(function (user) {
				console.log(user);
			})
			.catch(function (err) {
				console.log(err);
			})
		auth.user = {};
	}
	
	auth.logout = function () {
		authService.logout();
	}

	auth.isLoggedIn = function () {
		return authService.isLoggedIn();
	}

})