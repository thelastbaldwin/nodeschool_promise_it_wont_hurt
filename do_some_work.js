'use strict';

var qhttp = require('q-io/http');

qhttp.read('localhost:7000').then(function(id){
	return qhttp.read('localhost:7001/' + id)
}).then(console.log);