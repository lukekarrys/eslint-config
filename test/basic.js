'use strict';

const test = require('tape');
const config = require('../index.js');
const configNoBabel = require('../no-babel.js');
const configBase = require('../base.js');

const isObject = (obj) => typeof obj === 'object' && obj !== null;
const isString = (obj) => typeof obj === 'string';

test('test basic properties of base config', (t) => {
  t.ok(isObject(configBase.env));
  t.ok(isObject(configBase.plugins));
  t.ok(isObject(configBase.globals));
  t.ok(isObject(configBase.rules));
  t.ok(isString(configBase.extends));
  t.end();
});

test('test basic properties of config', (t) => {
  t.ok(isObject(config.plugins));
  t.ok(isObject(config.rules));
  t.ok(isString(config.extends));
  t.ok(isString(config.parser));
  t.ok(isObject(config.settings));
  t.end();
});

test('test basic properties of no-babel config', (t) => {
  t.ok(isObject(configNoBabel.env));
  t.ok(isString(configNoBabel.extends));
  t.ok(isString(configNoBabel.parser));
  t.ok(isObject(configNoBabel.parserOptions));
  t.end();
});
