var nodeExternals = require("webpack-node-externals");
var path = require("path");
var glob = require('glob');

module.exports = {
    entry: glob.sync(path.join(__dirname, "app/**/*js")),
    output: {
        filename: "server.js",
        path: path.join(__dirname, "build")
    },
    target: "node",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    },
    externals: nodeExternals()
};