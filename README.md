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

  1. babel-core is the primary Babel library.
  2. babel-loader is the loader tool we'll use to integrate Babel with Webpack.
  3. babel-preset-es2015 contains the information necessary for Babel to transpile our code to ES5.
  4. babel-preset-react contains the information necessary for Babel to understand our React code, in order to transpile it correctly.

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

<dl><dt>creates our app.bundle.js file in the build directory</dl></dt>
* touch index.html
  ```
    <!DOCTYPE html>
    <html>
      <head>
        <title>My First React Project</title>
      </head>
      <body>
        <div id="react-app-root">
        </div>
      </body>
      <script src="build/app.bundle.js"></script>
    </html>
  ```
* at the top of index.jsx
  ```
    import React from "react";
    import ReactDOM from "react-dom";
  ```
* webpack

<dl><dt>Creating React Components</dt></dl>

* mkdir src/components
* touch src/components/App.jsx and the file template is:
  ```
    import React from "react";

    function App(){
      return (
        <div>
        ...
        </div>
        );
    }

    export default App;
  ```
<dl><dt>Rendering Parent Components in the Entry File</dt></dl>  

* in src/index.jsx

  ```
    import React from "react";
    import ReactDOM from "react-dom";
    import App from "./components/App";

    ReactDOM.render(
      <App/>,
      document.getElementById('react-app-root')
    );
  ```
* webpack

<dl><dt>Creating Nested Components</dt></dl>  

* touch src/components/Header.jsx and add header details:

  ```
    import React from "react";

    function Header(){
      return (
        <h1>Help Queue</h1>
      );
    }

    export default Header;
  ```
* in src/components/App.jsx, add import Header from "./Header";
* in src/components/App.jsx, in<div></div>, revise <h1>Help Queue</h1> into <Header/>
* <https://www.learnhowtoprogram.com/react/react-fundamentals/components>

## Technologies Used

* React
* Virtual DOM
* Babel
* JSX
* HTML
* CSS
* JavaScript
* Bootstrap

## Support and contact details

Contact email: huqianqian@ymail.com

### License

Copyright (c) 2018 **qh**
