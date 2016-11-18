'use strict'

var Seneca = require('seneca')
var Express = require('Express')
var Web = require('seneca-web')

var config = {
  adapter: require('seneca-web-adapter-express'),
  context: Express()
}

var seneca = Seneca()
  .use('MathAPI')
  .use(Web, config)
  .ready(() => {
    var server = seneca.export('web/context')()
    server.listen('4000', () => {
      console.log('server started on: 4000')
    })
  })