var config = require('../');
var test = require('tape');

function isObject (obj) {
  return typeof obj === 'object' && obj !== null;
}

function isString (obj) {
  return typeof obj === 'string';
}

test('test basic properties of config', function (t) {
  t.ok(isObject(config.env));
  t.ok(isObject(config.plugins));
  t.ok(isObject(config.globals));
  t.ok(isObject(config.rules));
  t.ok(isString(config.extends));
  t.ok(isString(config.parser));
  t.end();
});
