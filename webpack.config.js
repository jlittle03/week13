const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module:{
  rules: [
    {
      test: 
      /\.([cm]?ts|tsx)$/, 
      loader: "ts-loader" 
    },
    {
      test: 
      /\.(sass)$/i,
      loader:'style-loader!css-loader!sass-loader!'
   }
  ],
},
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"]
     }
  },
    plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
    }),
  ],
};