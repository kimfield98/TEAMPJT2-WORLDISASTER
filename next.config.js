const webpack = require('webpack');

module.exports = {
  reactStrictMode: false,
  Images: {
    domains: ['worldisaster.com','via.placeholder.com'],
  },
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('cesium'),
      }),
    );
    return config;
  }
}