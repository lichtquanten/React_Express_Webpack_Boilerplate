var path = require("path");

module.exports = {
	context: path.join(__dirname, "src"),
	entry: {
		app:  "./script.js",
		hello: "./hello.jsx"
	},
	resolve: {
	 extensions: ['.js', '.jsx']
  },
	output: {
	   path: path.join(__dirname, "public"),
	   filename: "./js/[name].bundled.js"
	},
	module: {
	   rules: [
		{
		  test: /\.jsx{0,1}$/,
			include: path.join(__dirname, "src"),
		  loader: "babel-loader",
			query: {
				presets: ['es2015', 'react']
			}
		}
	   ]
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	}
}
