'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'tacos.db'),
    autoload: true
  });

  let options = {
    Model: db,
  };

  // Initialize our service with any options it requires
  app.use('/tacos', service(options));

  // Get our initialize service to that we can bind hooks
  const tacoService = app.service('/tacos');

  // Set up our before hooks
  tacoService.before(hooks.before);

  // Set up our after hooks
  tacoService.after(hooks.after);
};
