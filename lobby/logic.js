

IC.API.add('HELLO_EVENT', function (args, onDone, conn) {

	LOG.warn(conn);
	
	if (!args.name) {
		var err = 'no name provided';
		return onDone(err);
	}

	onDone(null, {hello: args.name});
});




IC.API.add('SUBSCRIBE', function (args, onDone) {

	// record the subscription
	// TODO: need access to the connection object calling this method
	LOG.warn('subscribing: ');
	LOG.warn(args);
	
	onDone(null, {msg: 'subscribe success!'});
	
}, {
	center: 'array',
	radius: '+number'		// radius is optional
});


IC.API.add('PUBLISH', function (args, onDone) {

	// record the subscription
	// TODO: need access to the connection object calling this method
	LOG.warn('publishing: ');
	LOG.warn(args);
	
	onDone(null, {msg: 'publish success!'});
	
}, {
	data:	'object',
	center: '+array',
	radius: '+number'		// radius is optional
});
