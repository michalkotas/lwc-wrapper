const path = require("path");
const LwcWebpackPlugin = require("lwc-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "lwcwrapper",
      library: { type: "var", name: "lwcwrapper" },
      filename: "remoteEntry.js",
      exposes: {
        "./web-components": "./src/index.js",
      },
    }),
    new LwcWebpackPlugin(),
  ],
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
