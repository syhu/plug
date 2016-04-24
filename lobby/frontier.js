//
//  frontier.js
//
//  main lobby server
//

// ImonCloud allows specifying a particular version number, for example:
require('imoncloud')('dev');

// load custom logic
require('./logic.js');

// show debug / warning / error messages
LOG.setLevel(3);

// show non-categorized messages
LOG.show('all');

//-----------------------------------------
// define local variables
//
//-----------------------------------------

// create frontier
var l_frontier = new IC.Frontier({
    path:               __dirname,
    components: [
        IC.Component.REST(),                    // start a HTTP server,
		IC.Component.SockJS(),					// start a sockjs HTTP server
    ],
	modules: {
		//'DB': {collections: [], shutdown_if_fail: true},
		'chat': {limit: 1000, backup: true},
		'pubsub': {}
	}
});
                           
// execute all the steps for running a server
l_frontier.init();

IC.Callback.onConnect(function (conn) {
	LOG.warn('user connected: ');		
	LOG.warn(conn);
});
		
IC.Callback.onDisconnect(function (conn) {
	LOG.warn('user disconnected: ');
	LOG.warn(conn);
});

IC.Callback.onStart(function () {
	LOG.warn('server info:');
	LOG.warn(IC.Settings.SERVER_INFO);
});


