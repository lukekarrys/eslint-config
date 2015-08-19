'use strict';

import test from 'tape';
import config from '../';

const isObject = (obj) => typeof obj === 'object' && obj !== null;
const isString = (obj) => typeof obj === 'string';

test('test basic properties of config', (t) => {
  t.ok(isObject(config.env));
  t.ok(isObject(config.plugins));
  t.ok(isObject(config.globals));
  t.ok(isObject(config.rules));
  t.ok(isString(config.extends));
  t.ok(isString(config.parser));
  t.end();
});
