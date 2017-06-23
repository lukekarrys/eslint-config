'use strict';

module.exports = {
  'extends': './base.js',

  parser: 'espree',

  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      // Everything that works in node 5 without a flag
      arrowFunctions: true,
      binaryLiterals: true,
      blockBindings: true,
      classes: true,
      defaultParams: true,
      generators: true,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      octalLiterals: true,
      spread: true,
      templateStrings: true
    }
  },

  env: {
    es6: true,
    node: true
  },

  rules: {
    'no-invalid-this': 2,
    strict: [2, 'safe'],
    'prefer-rest-params': 0
  }
};
