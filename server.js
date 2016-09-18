'use strict';
var application_root = __dirname
var express = require('express');
var body_parser = require('body-parser');
var _ = require('lodash');
var cors = require('cors');
var firebase = require("firebase");

var app = express();

// Initialize Firebase
var config = {
	apiKey: "AIzaSyD6NHTZhjW73HAaLfe2NnmcZO32uob4Fuw",
	authDomain: "rswhyy.firebaseapp.com",
	databaseURL: "https://rswhyy.firebaseio.com",
	storageBucket: "",
	messagingSenderId: "1078392653007"
};
firebase.initializeApp(config);
var db = firebase.database();
var ref = db.ref("stuff");

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

app.use(cors());
app.use('/static', express.static('static'));

app.get('/', function(req, res){
	console.log('ay');
	res.redirect('/static/html/index.html');
});

app.post('/data', function(req, res){
	console.log(req.body);
	ref.push({
		title: "performance",
		date: Date.now(),
		value: req.body
	});
	res.send('acknowledged');
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log('Magic happens on port ' + port);
});