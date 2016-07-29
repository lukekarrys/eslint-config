module.exports = {
  parser: 'babel-eslint',

  env: {
    browser: false,
    node: true,
    commonjs: true
  },

  plugins: [
    'react',
    'classes',
    'import'
  ],

  globals: {
    document: false,
    navigator: false,
    window: false
  },

  'extends': 'eslint:recommended',
  rules: {
    // Pre v1 eslint defaults
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-catch-shadow': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-process-exit': 2,
    'no-proto': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-sequences': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-undef-init': 2,
    'no-unused-expressions': 2,
    'no-use-before-define': 2,
    'no-with': 2,
    camelcase: 2,
    'consistent-return': 2,
    'dot-notation': [2, {allowKeywords: true}],
    'eol-last': 2,
    'no-extra-parens': [2, 'functions'],
    'key-spacing': [2, {beforeColon: false, afterColon: true}],
    'new-parens': 2,
    semi: 2,
    'semi-spacing': [2, {before: false, after: true}],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {words: true, nonwords: false}],
    yoda: [2, 'never'],

    // Custom
    'no-underscore-dangle': 0,
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, {before: false, after: true}],
    'comma-style': [2, 'last'],
    curly: [2, 'multi-line'],
    'space-before-function-paren': [2, {anonymous: 'always', named: 'never'}],
    'space-before-blocks': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'object-curly-spacing': [2, 'never'],
    'computed-property-spacing': [2, 'never'],
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [2, 'never'],
    'no-mixed-spaces-and-tabs': 2,
    'spaced-comment': [2, 'always'],
    'no-console': 2,
    'no-undef': 2,
    radix: 2,
    'no-else-return': 2,
    'no-var': 2,
    'brace-style': [2, 'stroustrup', {allowSingleLine: true}],
    'func-names': 2,
    'object-shorthand': [2, 'always'],
    'prefer-const': 2,
    'arrow-parens': [2, 'always'],
    'prefer-arrow-callback': 2,
    'prefer-template': 2,
    'jsx-quotes': [2, 'prefer-single'],
    'no-empty-pattern': 2,
    'no-magic-numbers': [2, {enforceConst: true, ignoreArrayIndexes: true, ignore: [-1, 0, 1, 2]}],
    'func-style': [2, 'expression', {allowArrowFunctions: true}],
    'arrow-body-style': [2, 'as-needed'],
    'no-case-declarations': 2,
    'no-constant-condition': 2,
    'prefer-spread': 2,
    'callback-return': [2, ['callback', 'cb', 'next', '_cb']],
    'consistent-this': [2, 'self'],
    'linebreak-style': [2, 'unix'],
    'no-empty': 2,
    'no-extra-semi': 2,
    // Remove since es7 class properties arent supported
    // https://github.com/babel/eslint-plugin-babel/issues/12
    // "no-invalid-this": 2,
    'quote-props': [2, 'as-needed', {keywords: true}],
    'no-useless-concat': 2,
    'no-nested-ternary': 2,
    'no-path-concat': 2,

    // eslint v2 rules
    'array-callback-return': 2,
    'no-implicit-globals': 2,
    'prefer-rest-params': 2,
    'no-unmodified-loop-condition': 2,
    'keyword-spacing': 2,
    'no-extra-label': 2,
    'no-new-symbol': 2,
    'no-self-assign': 2,
    'no-unused-labels': 2,
    'no-useless-constructor': 2,
    'no-whitespace-before-property': 2,
    'template-curly-spacing': [2, 'never'],
    'no-duplicate-imports': 2,
    'no-useless-escape': 2,
    'no-unsafe-finally': 2,
    'no-useless-computed-key': 2,
    'no-mixed-operators': 2,
    'rest-spread-spacing': [2, 'never'],

    // Classes
    'classes/space': 2,
    'classes/name': [2, 'class', 'method'],
    'classes/style': 2,

    // React
    'react/display-name': 2,
    'react/forbid-prop-types': [2, {forbid: ['any']}],
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-closing-bracket-location': [2, {location: 'tag-aligned'}],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-filename-extension': [2, {extensions: ['.js']}],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-indent': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [2, {maximum: 4}],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-no-bind': 0,
    'react/jsx-no-duplicate-props': [2, {ignoreCase: false}],
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-space-before-closing': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-comment-textnodes': 2,
    'react/no-danger': 0,
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    'react/no-did-update-set-state': [2, 'allow-in-func'],
    'react/no-direct-mutation-state': 2,
    'react/no-deprecated': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': 0,
    'react/no-unknown-property': 2,
    'react/no-render-return-value': 2,
    'react/prefer-es6-class': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/sort-prop-types': 0,
    'react/wrap-multilines': 2,

    // Import
    'import/no-unresolved': 2,
    'import/named': 2,
    'import/default': 2,
    'import/namespace': 2,
    'import/export': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-extraneous-dependencies': 2,
    'import/no-mutable-exports': 2,
    'import/imports-first': 2,
    'import/no-duplicates': 2,
    'import/order': [2, {groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index']}],
    'import/newline-after-import': 2,
    'import/prefer-default-export': 2,

    // Some stuff copied from standard
    'accessor-pairs': 2,
    'arrow-spacing': [2, {before: true, after: true}],
    'constructor-super': 2,
    'dot-location': [2, 'property'],
    eqeqeq: [2, 'allow-null'],
    'generator-star-spacing': [2, {before: true, after: true}],
    'handle-callback-err': [2, '^(err|error)$'],
    indent: [2, 2, {SwitchCase: 0}],
    'new-cap': [2, {newIsCap: true, capIsNew: false}],
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-multiple-empty-lines': [2, {max: 1}],
    'no-negated-in-lhs': 2,
    'no-new-require': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-self-compare': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-unexpected-multiline': 2,
    'no-unneeded-ternary': [2, {defaultAssignment: false}],
    'no-unreachable': 2,
    'no-unused-vars': [2, {vars: 'all', args: 'none'}],
    'no-useless-call': 2,
    'one-var': [2, {initialized: 'never'}],
    'operator-linebreak': [2, 'after', {overrides: {'?': 'before', ':': 'before'}}],
    'padded-blocks': [2, 'never'],
    quotes: [2, 'single', 'avoid-escape'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any']
  }
};
