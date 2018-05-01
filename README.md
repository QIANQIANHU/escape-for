# Escape from your office!

#### This is a WebPage to help user to generate inspiration of trips.

#### By Qianqian Hu 2018/04/20

## Description

## Setup/Installation Requirements
* apm install react@0.16.2 (make sure to install the Atom React package. This adds proper syntax highlighting to JSX files in Atom)
* mkdir folder
* mkdir src
* touch src/index.jsx and paste on the top
  ```
  import React from 'react';
  import ReactDOM from 'react-dom';
  ```
* apm install react@0.16.2
* npm init `Press Enter to accept the default values.`Note: If your project directory name includes any capital letters, some versions of npm may throw errors. If this occurs, re-name your directory in all lowercase and run $ npm init again.
* npm Install
* Create a file called .gitignore and add these lines:
  ```
  .DS_STORE
  node_modules
  build
  ```
  ***
  <dl><dt>Begin installing dependencies</dt></dl>

* npm install react@15.5.4 react-dom@15.5.4 --save  
* npm install webpack@3.4.0 --save-dev
* npm install webpack@3.4.0 -g

  <dl><dt>Webpack requires a webpack.config.js configuration file in the top-level of the project directory.</dt></dl>

* touch webpack.config.js and add these lines:<https://www.learnhowtoprogram.com/react/react-fundamentals/building-an-environment>
  ```
    const webpack = require('webpack'); //The path library is a dependency of Webpack
    const { resolve } = require('path');

    module.exports = {

      entry: [
        resolve(__dirname, "src") + "/index.jsx"
      ],

      output: {
        filename: 'app.bundle.js',
        path: resolve(__dirname, 'build'),
      },

      resolve: {
        extensions: ['.js', '.jsx']
      }

    };
  ```
    <dl><dt>use Babel to transpile our JSX into ES5 the browser understands</dt></dl>

* npm install babel-core@6.24.1 babel-loader@7.0.0 babel-preset-es2015@6.24.1 babel-preset-react@6.24.1 --save-dev

  > babel-core is the primary Babel library.
  > babel-loader is the loader tool we'll use to integrate Babel with Webpack.
  > babel-preset-es2015 contains the information necessary for Babel to transpile our code to ES5.
  > babel-preset-react contains the information necessary for Babel to understand our React code, in order to transpile it correctly.

* in webpack.config.js add these lines in module.exports
  ```
      module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: [
              "es2015",
              "react"
            ]
          }
        },
      ],
    }
  ```
* webpack

## Technologies Used

* React
* Virtual DOM
* JSX
* HTML
* CSS
* JavaScript
* Bootstrap

## Support and contact details

Contact email: huqianqian@ymail.com

### License

Copyright (c) 2018 **qh**
