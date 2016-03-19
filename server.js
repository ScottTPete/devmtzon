// TODO: import express and initialize the app

var products =
	[
		{
			"name": "Womens Watch",
			"image": "http://www.zappos.com/images/z/2/5/7/8/7/6/2578764-t-THUMBNAIL.jpg",
			"price": "44",
			"desc": "really awesome watch",
			"_id" : "11111100000000"

		},
		{
			"name": "Vans Shoes",
			"image": "http://www.zappos.com/images/z/3/2/6/8/2/5/326825-t-THUMBNAIL.jpg",
			"price": "65",
			"desc": "Great shoes for all year around",
			"_id" : "5553211000000001111111"

		},
		{
			"name": "Nixon watch",
			"image": "http://www.zappos.com/images/z/2/5/7/8/4/2/2578426-t-THUMBNAIL.jpg",
			"price": "265",
			"desc": "Awesome watch for guys",
			"_id" : "5435321100008983001111111"

		},
		{
			"name": "Neff",
			"image": "http://a2.zassets.com/images/z/1/7/6/7/9/7/1767977-p-LARGE_SEARCH.jpg",
			"price": "24",
			"desc": "Sweet beanie",
			"_id" : "77435321100000089111111"

		}

	];

var express = require("express");
var bodyParser = require('body-parser');
var _ = require('lodash');


var app = express();
var port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/api/getProductList', function(req, res, next) {
	res.status(200).json(products);
})

app.get('/api/getProduct/:id', function(req, res, next) {
	var item = _.findIndex(products, {_id: req.params.id});
	var itemObj = products.slice(item, item+1)
	res.status(200).json(itemObj);
})

app.post('/api/getProductList', function(req, res, next) {
	var newProduct = req.body;
	products.push(newProduct);
	res.status(200).json(newProduct);
})

app.put('/api/getProduct/:id', function(req, res, next) {
	var updateProduct = req.body;
	var itemToUpdateIndex = _.findIndex(products, {_id: req.params.id});
	console.log(updateProduct);
	console.log(itemToUpdateIndex);
	if(!products[itemToUpdateIndex]) {
		res.send("Nothing to update")
	} else {
		var updated = _.assign(products[itemToUpdateIndex], updateProduct);
		res.json(updated);
	}
})

app.delete('/api/getProduct/:id', function(req, res, next) {
	var itemToDeleteIndex = _.findIndex(products, {_id: req.params.id});
	if(!products[itemToDeleteIndex]) {
		res.send('Nothing to delete');
	} else {
		var itemObj = products[itemToDeleteIndex];
		products.splice(itemToDeleteIndex, 1);
		res.status(200).json(itemObj);
	}
})

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
	console.log('Listening on port', port);
});

