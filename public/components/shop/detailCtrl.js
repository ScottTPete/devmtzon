/* global angular */
var app = angular.module('ecommerce');

app.controller('DetailCtrl', function (product, $state, cartService) {
	var detail = this;
	detail.product = product[0];



	detail.addToCart = function (itemId, quantity) {
		cartService.addToCart(itemId, quantity);
		$state.go('main.cart');
	};

});