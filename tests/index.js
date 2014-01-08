'use strict';

var cercle = require('cercle'),
	cercleJs = require(__dirname+'/../index.js'),
	assert = require('assert');

var plug = cercle.plugin(cercleJs);

var id;

describe('plug', function(){
	it('is ok', function(){
		assert.ok(plug);
	});
});

describe('plug#unsubscribeAll()', function(){
	it('unsubscribes all for a topic', function(d){
		plug.unsubscribeAll('topic', function(e){
			assert.ok(!e);
			d();
		});
	});
});

describe('plug#subscribe()', function(){
	it('subscribes to a topic', function(){
		id = plug.subscribe('topic');
		assert.ok(id);
		assert.equal(typeof id, 'string');
	});
});

describe('plug#publish()', function(){
	it('publishes on a topic', function(d){

		plug.events.on('message', function(message){
			assert.ok(message);
			d();
		});

		plug.publish({topic:'topic',foo: 'bar' }, function(){});
	});
});

describe('plug#unsubscribe()', function(){
	it('subscribes to a topic', function(d){
		plug.unsubscribe('topic', id, function(e){
			assert.ok(!e);
			d();
		});
	});
});
