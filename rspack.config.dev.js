const path = require("path");
const NodePolyfill = require("@rspack/plugin-node-polyfill");
const projectDir = process.cwd();
/** @type {import('@rspack/cli').Configuration} */
module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(projectDir, "src/main.jsx"),
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(projectDir, "dist"),
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 7077,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-nesting")],
              },
            },
          },
        ],
        type: "css",
      },
    ],
  },
  plugins: [new NodePolyfill()],
  builtins: {
    html: [
      {
        template: path.join(projectDir, "src/template.html"),
      },
    ],
    define: {},
    progress: {},
  },
};
