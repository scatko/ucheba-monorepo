/* eslint-disable */
const path = require("path")
const withPlugins = require("next-compose-plugins")
const withCustomBabelConfig = require("next-plugin-custom-babel-config")
const withTranspileModules = require("next-plugin-transpile-modules")

function withCustomWebpack(config = {}) {
  const {webpack} = config

  config.webpack = (config, ...rest) => {
    config.externals = config.externals || []

    return webpack(config, ...rest)
  }

  return config
}

const plugins = [
  [withTranspileModules, {transpileModules: ["@ucheba"]}],
  [withCustomBabelConfig, {babelConfigFile: path.resolve("../../../babel.config.js")}],
  [withCustomWebpack],
]

const config = {}

module.exports = withPlugins(plugins, config)
