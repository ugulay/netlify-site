module.exports = {
  target: 'serverless',
  exportPathMap: 'out',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}
