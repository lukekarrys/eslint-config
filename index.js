'use strict';

module.exports = {
  'extends': './base.js',

  parser: 'babel-eslint',

  parserOptions: {
    sourceType: 'module'
  },

  plugins: [
    'react',
    'classes',
    'babel'
  ],

  settings: {
    'import/resolver': 'webpack',
    'import/ignore': [
      'node_modules',
      '.(svg|less|css|png|scss|jpg)$'
    ]
  },

  rules: {
    // Classes plugin
    'classes/space': 2,
    'classes/name': [2, 'class', 'method'],
    'classes/style': 2,

    // Babel
    'no-invalid-this': 0,
    'babel/no-invalid-this': 2,
    'babel/object-curly-spacing': [2, 'never'],
    'babel/semi': 2,

    // React plugin
    'react/display-name': 2,
    'react/default-props-match-prop-types': [2, {allowRequiredDefaults: true}],
    'react/forbid-prop-types': [2, {forbid: ['any']}],
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-closing-bracket-location': [2, {location: 'tag-aligned'}],
    'react/jsx-closing-tag-location': 2,
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-filename-extension': [2, {extensions: ['.js']}],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-indent': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [2, {maximum: 4}],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-no-bind': 0,
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': [2, {ignoreCase: false}],
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-tag-spacing': [2, {closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never'}],
    'react/jsx-no-target-blank': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 2,
    'react/no-danger': 0,
    'react/no-danger-with-children': 2,
    'react/no-find-dom-node': 2,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,
    'react/no-direct-mutation-state': 2,
    'react/no-deprecated': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': 0,
    'react/no-unknown-property': 2,
    'react/no-render-return-value': 2,
    'react/no-redundant-should-component-update': 2,
    'react/no-string-refs': 2,
    'react/no-typos': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unused-prop-types': 2,
    'react/no-unused-state': 2,
    'react/no-will-update-set-state': 2,
    'react/prefer-es6-class': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/sort-prop-types': 0,
    'react/style-prop-object': 2,
    'react/void-dom-elements-no-children': 2
  }
};
