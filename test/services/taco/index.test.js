'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('taco service', function() {
  it('registered the tacos service', () => {
    assert.ok(app.service('tacos'));
  });
});
