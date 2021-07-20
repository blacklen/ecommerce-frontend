module.exports = {
  devServer: {
    port: 3001,
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  configureWebpack: {
    // No need for splitting
    optimization: {
      splitChunks: false,
    },
    output: {
      filename: 'app-v1.js',
    },
  },
  css: {
    extract: false,
  },
  productionSourceMap: false,
};
