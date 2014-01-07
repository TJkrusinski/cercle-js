## Cercle-js

A JavaScript based interface for [cercle](http://github.com/tjkrusinski/cercle).

## Example

```javascript

var cercle = require('cercle'),
	cercleJs = require('cercle-js');

var pubSub = cercle.plugin(cercleJs, {
	name: 'pubsub'
});

/**
 *	Subscribe to a topic
 *	Returns an id of the 'user' you created
 *	Use the id later to unsubscribe just that user
 */
var id = pubSub.subscribe('topic');

pubSub.unsubscribe('topic'[, 'user id']);

pubSub.events.on('message', function(message){

});

/**
 *	Publish on a topic
 *	Second paramaeter is any js type
 */
pubSub.publish('message', {});

```

## License

(The MIT License)

Copyright (c) 2013 TJ Krusinski &lt;tjkrus@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
