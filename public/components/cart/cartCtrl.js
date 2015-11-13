var app = angular.module('ecommerce');

app.controller('CartCtrl', function () {
	this.test = 'I am the Cart-Man!!!!!!!!';
	
	this.click = function () {
		console.log('click cart');
	}
})