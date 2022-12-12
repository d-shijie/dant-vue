// const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = {
  transpileDependencies: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/dant/style/global.scss')
      ]
    }
  }
}
