var nodeExternals = require("webpack-node-externals");
var path = require("path");

module.exports = {
    entry: path.join(__dirname, "app/server.js"),
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