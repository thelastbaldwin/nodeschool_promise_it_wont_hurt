'use strict';

function attachTitle(surname){
	return 'DR. ' + surname;
}

Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);