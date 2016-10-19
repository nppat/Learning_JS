// Create app and link to angular.module
var app = angular.module('app', []);


// Create productFacotry
app.factory('productFactory', function() {
	// create product object and product array
	var factory = {};
	var products = [];

	// Return products through callback
	factory.index = function(callback) {
		console.log('[Factory: Index]');
		callback(products);
	}

	// Create products and save to DB
	factory.create = function(newProduct, callback) {
		console.log('[Factory: create]');
		products.push(newProduct); // push newProduct to products{}
		callback(products);
	}

	// Delete product
	factory.delete = function(id, callback) {
		console.log('[Factory: Delete]')
		products.splice(id, 1);
		callback(products);
	}
	return factory;
});

// Create controller, inject productFacotry
app.controller('product_controller',['$scope', 'productFactory', function($scope, productFactory) {
	function showProduct(data) {
		$scope.products= data;
		$scope.product = {};
	}

	// Create and object and an array to store products and product
	$scope.products = {};
	$scope.product = [];

	//  Show products on index.html
	$scope.index = function(){
		console.log('[Scope: Index]');
		// access productFactory and get products
		productFactory.index(showProduct);
	}
	$scope.index;

	$scope.addProduct = function(){
		console.log('[Scope: addProduct]');
		productFactory.create($scope.product, showProduct);
	}

	$scope.delete = function(productToDelete) {
		console.log('[Scope: delete]');
		productFactory.delete(productToDelete, showProduct);
	}

}]);