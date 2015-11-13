var app = angular.module('ecommerce', ['ui.router']);

app.config(function ($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
		.state('main', {
			url: '/',
			templateUrl: 'components/main/mainView.html',
			controller: 'MainCtrl',
			controllerAs: 'main'
		})
		.state('main.cart', {
			url: '^/cart',
			templateUrl: 'components/cart/cartView.html',
			controller: 'CartCtrl',
			controllerAs: 'cart'
		})
		.state('main.auth', {
			url: '^/account',
			templateUrl: 'components/auth/authView.html',
			controller: 'AuthCtrl',
			controllerAs: 'auth'
		})
		.state('main.cause', {
			url: '^/cause',
			templateUrl: 'components/static/causeView.html'
		})
		.state('main.story', {
			url: '^/story',
			templateUrl: 'components/static/storyView.html'
		})
		.state('main.blog', {
			url: '^/blog',
			templateUrl: 'components/static/blogView.html'
		})
})