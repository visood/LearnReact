var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "src/dev");
var OUTPUT = path.resolve(__dirname, "src/output");

var config = {
  entry: DEV + "/index.jsx",
  output: {
    path: OUTPUT,
    filename: "todo.js"
  },
  mode: "development",
  module: {
    rules: [{
      include: DEV,
      loader: "babel-loader",
    }]
  }
};

module.exports = config;
