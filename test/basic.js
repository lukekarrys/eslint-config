'use strict';

import test from 'tape';
import config from '../index.js'; // eslint-disable-line import/default
import config2 from '../no-babel.js'; // eslint-disable-line import/default

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

test('test basic properties of no-babel config', (t) => {
  t.ok(isObject(config2.env));
  t.ok(isString(config2.extends));
  t.ok(isString(config2.parser));
  t.ok(isObject(config2.parserOptions));
  t.end();
});
