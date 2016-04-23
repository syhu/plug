

IC.API.add('HELLO_EVENT', function (args, onDone) {
	LOG.warn('HELLO_WORLD called');

	var err;
	if (!args.name) {
		err = 'no name provided';
	}
		
	UTIL.safeCall(onDone, err, (err ? undefined : {hello: args.name}));
});


