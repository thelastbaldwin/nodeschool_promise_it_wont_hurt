'use strict';

var qhttp = require('q-io/http');

qhttp.read('http://localhost:7000').then(function(content){
	return qhttp.read('http://localhost:7001/'+content.toString());
}).then(function(content){
	console.log(JSON.parse(content.toString()));
}).catch(function(error){
	console.log(error.message);
})