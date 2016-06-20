'use strict';

var successPromise = Promise.resolve('SUCCESS');
successPromise.then(console.log);

function onReject(error){
	console.log(error.message);
}

var failPromise = Promise.reject(new Error('NO SUCCESS'));
failPromise.catch(onReject);