'use strict';

function parsePromised(jsonData){

	return new Promise(function(fulfill, reject){
		try {
			var data = JSON.parse(jsonData);
			fulfill(data);
		} catch(error){
			reject(error);
		}
	});
}

parsePromised(process.argv[2]).catch(console.log);