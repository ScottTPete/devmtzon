/* global angular */
var app = angular.module('ecommerce');

app.service('shopService', function ($http, $q) {


	this.getProductsPreview = function () {
		var dfd = $q.defer();

		$http.get('/api/getProductList')
			.then(function (products) {

				dfd.resolve(products.data);
			})
			.catch(function (error) {
				console.log(error);
				dfd.reject(error);
			});

		return dfd.promise;
	};

	this.getProductDetails = function (id) {
		var dfd = $q.defer();
		$http.get('/api/getProduct/' + id)
			.then(function (product) {
				console.log(product);
				dfd.resolve(product.data);
			})
			.catch(function (error) {
				console.log(error);
				dfd.reject(error);
			});

		return dfd.promise;
	};

});