'use strict';

var js = {};

js.init = function(cercle, opts){
	return cercle({
		name: opts.name || 'js'
	});
};
