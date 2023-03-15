const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package.json')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      // jsonpFunction: `webpackJsonp_${name}`,
    }
  },
  devServer: {
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
