const withCss = require('@zeit/next-css')

// add css import feature
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => { }
}

module.exports = withCss({})