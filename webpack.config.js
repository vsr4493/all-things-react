var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var PATHS = {
	JS: path.resolve(__dirname, "src"),
	DIST: path.resolve(__dirname, "dist"),
	PUBLIC: path.resolve(__dirname, "public")
};

var config = {
	entry: [path.join(PATHS.JS, "app.js")],
	output: {
		path: PATHS.DIST,
		filename: "bundle.js"
	},
	devServer: {
		contentBase: PATHS.PUBLIC
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(PATHS.PUBLIC, "index.html")
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					"babel-loader",
				]
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx"]
	}
};

module.exports = config;
