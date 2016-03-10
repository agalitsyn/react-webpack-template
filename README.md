# React ES6 boilerplate

Fork of `https://github.com/petehunt/react-webpack-template`

## How it was created

* `npm init` and answer some questions
* `npm install --save-dev eslint eslint-plugin-react`
* `./node_modules/.bin/eslint --init` and answer some questions
* `npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react`
* `npm install --save-dev babel-eslint` and change parser in `.eslintrc`
* `npm install --save-dev webpack webpack-dev-server css-loader extract-text-webpack-plugin file-loader style-loader url-loader bundle-loader`
* `npm install --save react react-dom express`
* Finally uncomment `save-exact = true` in `.npmrc` for app development

## How to use this

* Clone the repo
* Install the dependencies: `npm install`
* Start webpack: `npm start`
* Add your code to `index.js` and open `index.html`

## TODO

* [ ] Use bootstrap from npm
* [ ] Add react-router
* [ ] Add production build
