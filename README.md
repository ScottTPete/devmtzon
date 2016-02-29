Day 1
--

## D1) Setting up the project

###  Folder Structure
####
Proper and consistent folder structure can save you and your team hours of work.  The most important rule of folder structure is consistency.  Create a folder for you server files. Common names for this folder are server or api

### Code
####
* Create a new repository
* Create the following files in this structure in your project folder

```
api/
    controllers/
        productController.js
public/
    (already included)

package.json
server.js


```

### Creating the package.json file

####
* Basic setup - name, author, version, description, main
* Add a scripts object with the property start with the value being node your server file name.  Example "start": "node server.js"
* IMPORTANT in your console run npm install --save express to save express as a dependency in your package.json. By running npm install --save it will either create a dependencies object with the newly added dependency or it will add the dependency to the already created dependencies object

####

This file must be called package.json otherwise npm will not work

```
{
 "Basic Info" : "name", "author", "version", "description"
 "main": "server.js",
 "scripts": {
    Add a start property with the value equal to your server file name
      },
}

####

Here is an example of a package.json file after express has been installed via npm install --save express

{
  "name": "ecommerce",
  "author": "Your name",
  "license": "ISC",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.13.4",
  }
}

```

### Install Dependencies
####
Run npm install and bower install

####
If Npm install or Bower install fails make sure you are in the right directory. Npm needs to have access to the package.json file and bower needs to have access to the bower.json file

## D1) Creating the server

###  Server.js

####
* In your server.js file import express using require, create an express app, add some express middleware that points express to your static directory "public", last step have your app listen to a specific port number 8080, 8000, 8888, 3000, 4500 are some popular port numbers
* Run nodemon and navigate your url to http://localhost:YourPortNumber

####

Partial Example

```
var express = some code,
    app = some code;

app.use(some code.static(__dirname + 'some directory'));


app.listen(some port, function () {
	console.log('Listening on port', some port );

	this will log to your console where your node is being ran NOT to your browser console

});

```
####

 Actual Code

 ```

var express = require('express'),
    app = express(),
    port = 8080;


app.use(express.static(__dirname + '/public'));


app.listen(port, function () {
	console.log('Listening on port', port);
});

 ```

## D1) Express Routes

### Create a get

####
* In your server.js file import express using require, create an express app, add some express middleware that points express to your static directory "public", last step have your app listen to a specific port number 8080, 8000, 8888, 3000, 4500 are some popular port numbers
* Run nodemon and navigate your url to http://localhost:YourPortNumber

####

Partial Example

```
var express = some code,
    app = some code;

app.use(some code.static(__dirname + 'some directory'));


app.listen(some port, function () {
	console.log('Listening on port', some port );

	this will log to your console where your node is being ran NOT to your browser console

});

```
####

 Actual Code

 ```

var express = require('express'),
    app = express(),
    port = 8080;


app.use(express.static(__dirname + '/public'));


app.listen(port, function () {
	console.log('Listening on port', port);
});

 ```


