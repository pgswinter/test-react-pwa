import path from "path";
import hwp from "html-webpack-plugin";
import WebfontPlugin from "webfont-webpack-plugin";
import WorkboxPlugin from "workbox-webpack-plugin";

export default {
  entry: [path.join(__dirname, "./src/index.js")],
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(css|scss|less)$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
          "less-loader"
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ["file-loader"]
      },
      {
        loader: "url-loader",
        test: /\.(svg|eot|ttf|woff|woff2)?$/
      }
    ]
  },
  plugins: [
    new WebfontPlugin({
      files: path.resolve(__dirname, "../fixtures/svg-icons/**/*.svg"),
      dest: path.resolve(__dirname, "../fixtures/css/fonts"),
      destTemplate: path.resolve(__dirname, "../fixtures/css")
    }),
    new hwp({ template: path.join(__dirname, "/public/index.html") }),
    new WorkboxPlugin.GenerateSW({
      runtimeCaching: [
        {
          // Match any same-origin request that contains 'api'.
          urlPattern: /api/,
          // Apply a network-first strategy.
          handler: "CacheFirst",
          options: {
            // Fall back to the cache after 10 seconds.
            cacheName: "abc-csd"
          }
        },
        {
          // To match cross-origin requests, use a RegExp that matches
          // the start of the origin:
          urlPattern: new RegExp("^https://cors.example.com/"),
          handler: "StaleWhileRevalidate",
          options: {
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    hot: true
  },
  devtool: "source-map",
  mode: "development"
};
