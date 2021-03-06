# @lukekarrys/eslint-config

[![NPM](https://img.shields.io/npm/v/@lukekarrys/eslint-config.svg)](https://www.npmjs.com/package/@lukekarrys/eslint-config)

This is my [`eslint`](http://eslint.org/) config.

Use it if you want to write code exactly like me. It's probably not that useful to you though.

I'll probably change stuff quite a bit and just bump the patch version, and leave major versions for when I don't want to update existing projects to lint against the latest config.

Things it does

- `babel-eslint` (or just ES6 for node stuff)
- `react`
- Some stuff copied from `standard`
- Some stuff copied from the old 0.x.y `eslint` defaults


## Usage

```sh
npm install @lukekarrys/eslint-config eslint eslint-plugin-import --save-dev
# If the project does babel/react stuff
npm install @lukekarrys/eslint-config eslint babel-eslint eslint-plugin-{babel,react,classes,promise,import} --save-dev
# Write eslitnrc configs for babel/react stuff
echo '{\n  "extends": "@lukekarrys/eslint-config"\n}' > .eslintrc
# or if its not using babel
echo '{\n  "extends": "@lukekarrys/eslint-config/no-babel"\n}' > .eslintrc
```

## License

MIT
