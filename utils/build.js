const webpack = require('webpack')
const config = require('../webpack.config')
const newVersion = '1.0.0'
console.log('🚀  New version:', newVersion)
process.env.extension_version = newVersion
require('./prepare')

webpack(
  config,
  function (err) {
    if (err) {
      throw err
    }
  }
)
