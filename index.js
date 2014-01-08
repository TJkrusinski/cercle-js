'use strict';

var js = {};

js.init = function(cercle, opts){
	return cercle({
		name: opts && opts.name || 'js'
	});
};

module.exports = js;
