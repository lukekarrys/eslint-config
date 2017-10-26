'use strict';

module.exports = {
  'extends': './base.js',

  parser: 'espree',

  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },

  env: {
    es6: true,
    node: true
  },

  rules: {
    strict: [2, 'safe']
  }
};
