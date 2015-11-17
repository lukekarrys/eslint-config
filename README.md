# @lukekarrys/eslint-config

[![NPM](https://img.shields.io/npm/v/@lukekarrys/eslint-config.svg)](https://www.npmjs.com/package/@lukekarrys/eslint-config)
[![Build Status](https://img.shields.io/travis/lukekarrys/eslint-config/master.svg)](https://travis-ci.org/lukekarrys/eslint-config)

This is my [`eslint`](http://eslint.org/) config.

Use it if you want to write code exactly like me. It's probably not that useful to you though.

I'll probably change stuff quite a bit and just bump the patch version, and leave major versions for when I don't want to update existing projects to lint against the latest config.

Things it does

- `babel-eslint`
- `react`
- Some stuff copied from `standard`
- Some stuff copied from the old 0.x.y `eslint` defaults


## Usage

```sh
npm install @lukekarrys/eslint-config --save-dev
npm install babel-eslint eslint eslint-plugin-react eslint-plugin-classes --save-dev
echo '{\n  "extends": "@lukekarrys/eslint-config"\n}' > .eslintrc
```

## License

MIT
