const webpack = require('webpack')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify('./public'),
      'process.env.name': JSON.stringify('Production'),
    }),
    new BundleAnalyzerPlugin(),
  ],
}
