//
//
// settings.js
//
//

var settings = exports.settings = {

	projectName:	'Plug',						// unique project name under this user 
	lobbyPort: 		3700,						// port for main lobby server
	domain: 		IC.Settings.DOMAIN_LOBBY,	// external domain name for lobby server
	adminMail: 		'syhu@imonology.com',
	
	// app server's settings
	apps: {
		'lobby': {
			local_name: 'Plug'
		}	
	},

	// file paths to secure keys (needed by HTTPS services, etc)
	keys: {
		privatekey: __dirname + '/keys/privatekey.pem',
		certificate: __dirname + '/keys/certificate.pem'
	},

	// settings for starting servers
	servers: {
		min: 0,
		max: 3,
		overload:  100,
		//underload: 0
	}
};


settings.mongoAccess = {"DB_name":"syhu-plug","username":"syhu-plug","password":"218147"};
