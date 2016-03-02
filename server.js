var express = require('express'),
    bodyParser = require('body-parser'),
    _ = require('lodash');
    app = express(),
    port = 8080;



app.use(express.static(__dirname + '/public'));

//TODO Import body parser and apply it to the app as middleware

// Nothing to do here this is just our products array

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



//Create a GET request that returns all the products data


//Create a GET request that looks for a specific product id


//Create a POST request that takes the product from body of the request and then pushes it to the products array



// Create a PUT request that takes the product id from the req.params and updates that id with the id from the req body



// Create a DELETE request that takes the product id from the req.params Deletes it



app.listen(port, function () {
    console.log('Listening on port', port);
});



