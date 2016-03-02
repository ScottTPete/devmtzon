var express = require('express'),
    app = express(),
    port = 8080;


app.use(express.static(__dirname + '/public'));


app.listen(port, function () {
    console.log('Listening on port', port);
});