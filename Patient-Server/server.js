/**
 * Created by aravind on 10/11/17.
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const router = require('./router.js');

const slack = require('slack-notify')("https://hooks.slack.com/services/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");


//serve Website in Public folder

app.set('public',path.join(__dirname,'public'));
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//setting cors

//Done during testing part

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

//All api request are handled by the router.js file

app.use('/api',router);

app.listen(3000,()=>{
	console.log("Server listening at port 3000");
});


//Mongodb is hosted in mlab