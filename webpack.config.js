var path = require('path');

var PATHS = {
	JS: path.resolve(__dirname, "src"),
	DIST: path.resolve(__dirname, "dist")
};

var config = {
	entry: [
		path.join(PATHS.JS, "app.js")
	],
	output: {
		path: PATHS.DIST,
		filename: 'bundle.js'
	}
}

module.exports = config;