
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-content-stack.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-content-stack.cjs.development.js')
}
