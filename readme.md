# interactive-npm-version [![Build Status](https://travis-ci.org/peterforgacs/interactive-npm-version.svg?branch=master)](https://travis-ci.org/peterforgacs/interactive-npm-version)

> Interactive npm version selector ideally used with git hooks.

## Install

```
$ npm install interactive-npm-version --save-dev
```

## Usage

If you have git hook set up:

```js
// package.json
"scripts":{
  "postcommit": "./node_modules/.bin/interactive-npm-version"
}
```

Its a wrapper around npm version so it should behave like it.

## License

MIT © [Peter Forgacs](http://peterforgacs.github.io)
