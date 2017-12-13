var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
		}),
		new ExtractTextPlugin("style.bundle.css")
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					use: "css-loader"
				})
			},
			{
				test: /\.(jpg|png|jpeg|svg|gif)$/,
				loader: "file-loader"
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			"@images": path.join(PATHS.PUBLIC, "assets", "images")
		},
		modules: [path.resolve(__dirname, "src"), "node_modules"]
	}
};

module.exports = config;
