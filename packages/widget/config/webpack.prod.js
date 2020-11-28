const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "widget",
      filename: "remoteEntry.js",
      exposes: {
        "./WidgetApp": "./src/bootstrap",
      },
      /**
       * The below allows us to share dependencies between applications.
       * For example, we could add 'faker' and share that with another remote application .
       */
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
