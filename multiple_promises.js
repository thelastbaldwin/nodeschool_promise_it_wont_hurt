'use strict';

function all(promiseA, promiseB){
	return new Promise(function(fulfill, reject){
		var counter = 0,
			output = [];
		function incrementAndPush(value){
			output.push(value);
			counter++;
			if(counter == 2){
				fulfill(output);
			}
		}
		promiseA.then(incrementAndPush);
		promiseB.then(incrementAndPush);
	});
}

all(getPromise1(), getPromise2()).then(console.log);