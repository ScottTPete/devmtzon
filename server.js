var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local');

// db models
var User = require('./api/models/UserModel.js')

// api controllers
var UserCtrl = require('./api/controllers/UserController.js')

// passport config
passport.use(new LocalStrategy(function (username, password, done) {
	User.findOne({ username: username }).exec(function (err, user) {
		if (err) {
			return done(err);
		}
		if (!user) {
			return done(null, false);
		}
		user.verifyPassword(password).then(function (isMatch) {
			if (!isMatch) {
				return done(null, false);
			}
			return done(null, user.toJSON());
		})
	})
}))

passport.serializeUser(function (user, done) {
	done(null, user._id)
})

passport.deserializeUser(function (id, done) {
	User.findById(id).exec(function (err, user) {
		if (err) { return done(err) }
		done(null, user)
	})
})

// api endpoint protection helper method
var isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated()) {
		next();
	} else {
		return res.status(403).send('Not logged in');
	}
}


// server config
var app = express();
var port = 8888;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use(session({
	secret: 'timespentchoosingasessionsecretisnotwasted',
	saveUninitialized: false,
	resave: false
}))

app.use(passport.initialize());
app.use(passport.session());








// API endpoints
app.post('/api/signup', UserCtrl.signup);

app.post('/api/login', passport.authenticate('local', { failureRedirect: '/#/account' }),
	function (req, res) {
		var user = req.user;
		console.log(user);
		
		delete user.password;
		res.status(200).json(user);
	})

app.get('/api/logout', function (req, res) {
	req.logout();
	res.status(200).redirect('/#/')
})



var mongoUri = 'mongodb://localhost:27017/devecommerce';
mongoose.connect(mongoUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
	console.log('Connected to mongo at', mongoUri)
})

app.listen(port, function () {
	console.log('Listening on port', port);
})