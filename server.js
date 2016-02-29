var express = require('express'),
    app = express(),
    port = 8080;


app.use(express.static(__dirname + '/public'));

app.get('/api/getProductList', function(req, res) {
    res.send(
        {
        products:
        {
            name: 'shoes',
            price: 45,
            image: 'https://avatars0.githubusercontent.com/u/8473830?v=3&s=460',
            id: '43214213',
            desc: 'Great pair of all purpose shoes that are awesome for every season'

        }
    });
});


app.listen(port, function () {
	console.log('Listening on port', port);
});