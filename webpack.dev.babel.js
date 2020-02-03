import merge from "webpack-merge";
import common from "./webpack.common.babel";

export default merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  }
});
