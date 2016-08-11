'use strict';

import test from 'tape';
import config from '../index.js'; // eslint-disable-line import/default
import configNoBabel from '../no-babel.js'; // eslint-disable-line import/default
import configBase from '../base.js'; // eslint-disable-line import/default

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
