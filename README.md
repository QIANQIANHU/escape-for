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
* in src/components/App.jsx, revise origin code into <Header/>
* <https://www.learnhowtoprogram.com/react/react-fundamentals/components>

<dl><dt>Declaring Prop Types after edit components</dt></dl>  

* npm install prop-types@15.5.10 --save and add `import PropTypes from "prop-types";` on the top of src/components/Place.jsx
* after funtion Place, add
  ```
    Ticket.propTypes = {
      names: PropTypes.string,
      location: PropTypes.string,
      issue: PropTypes.string
    };
  ```
<dl><dt>Development Server & Hot Module Replacement</dt></dl>

1. Webpack Development Server

* npm install webpack-dev-server@2.5.0 -g
* npm install webpack-dev-server@2.5.0 --save-dev
* webpack
* webpack-dev-server
* now can visit http://localhost:8080

2. Hot Module Replacement

* npm install react-hot-loader@3.0.0-beta.7 --save-dev, in our entry configurations, update webpack.config.js to enable HMR

  ```
  const { resolve } = require('path');
  const webpack = require('webpack');

  module.exports = {

    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      resolve(__dirname, "src", "index.jsx")
    ],
  ```
* add a publicPath property to our output configurations:

    ```
      output: {
        filename: 'app.bundle.js',
        path: resolve(__dirname, 'build'),
        publicPath: '/'
      },
    ```
* Below resolve we'll add configurations for development tools and our development server:
  ```
    resolve: {
     extensions: ['.js', '.jsx']
     },

     devtool: '#source-map',

     devServer: {
       hot: true,
       contentBase: resolve(__dirname, 'build'),
       publicPath: '/'
     },
  ```
* add configurations to the rules section:
  ```
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: [
              ["es2015", {"modules": false}],
              "react",
            ],
            plugins: [
              "react-hot-loader/babel"
            ]
          }
        }
      ]
    },
  ```
* add a few plugins below our module section
  ```
  module: {
    rules: [
      {
        ...
          plugins: [
            "react-hot-loader/babel"
          ]
        }
      }
    ]
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ]
    };
  ```
* final vision refer to <https://www.learnhowtoprogram.com/react/react-fundamentals/building-an-environment-development-server-hot-module-replacement>
* update our index.jsx entry point file:
  ```
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './components/App';
    import { AppContainer } from 'react-hot-loader';

    const render = (Component) => {
      ReactDOM.render(
        <AppContainer>
          <Component/>
        </AppContainer>,
        document.getElementById('react-app-root')
      );
      };

    render(App);

    if (module.hot) {
      module.hot.accept('./components/App', () => {
        render(App)
      });
    }
  ```
* webpack-dev-server(no longer have to run $ webpack before launching our server, still something wrong)
* npm install html-webpack-plugin@2.29.0 --save-dev
* import it into webpack.config.js and add following code to the plugins array:
  ```
    const webpack = require('webpack');
    const { resolve } = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    ...

      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
          template:'template.ejs',
          appMountId: 'react-app-root',
          title: 'React Help Queue',
          filename: resolve(__dirname, "build", "index.html"),
        }),
      ]
    };
  ```
* delete our existing index.html and replace it with the following file(template.ejs) in the top-level of our project directory:
  ```
    <!DOCTYPE html>
    <head>
      <meta charset="utf-8">
      <title><%= htmlWebpackPlugin.options.title %></title>
    </head>
      <body>
        <% if (htmlWebpackPlugin.options.appMountId) { %>
          <div id="<%= htmlWebpackPlugin.options.appMountId%>"></div>
        <% } %>
      </body>
    </html>
  ```
* webpack-dev-server

<dl><dt>npm Scripts</dt></dl>

* npm run test and in package.json add scripts:
  ```
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start":  "webpack-dev-server"
    },
  ```
* npm run test
* webpack-dev-server or npm run start

<dl><dt>Linting with ESLint</dt></dl>

* npm install eslint -g
* npm install eslint-plugin-react -g
* eslint --init
* Select Answer questions about your style
  ```
    ? Are you using ECMAScript 6 features? Yes
    ? Are you using ES6 modules? Yes
    ? Where will your code run? Browser
    ? Do you use CommonJS? No
    ? Do you use JSX? Yes
    ? Do you use React? Yes
    ? What style of indentation do you use? Spaces  
    ? What quotes do you use for strings? Single
    ? What line endings do you use? Unix
    ? Do you require semicolons? Yes
    ? What format do you want your config file to be in? JSON
  ```
* in eslintrc.json, recommend manually changing this to 2:
  ```
    "indent": [
      "error",
      2
    ],
  ```
* eslint src/** src/**/**
* eslint src/** src/**/** --fix
* in eslintrc.json:
  ```
    "extends": "eslint:recommended",
  ```
* add linting rules in .eslintrc.json:
  ```
    "rules": {
      "react/jsx-uses-vars": 2,
      "react/jsx-uses-react": 2,
  ```
  ```
    "plugins": [
      "react"
    ],
  ```
  (how "serious" a violation of this error should be:0 = off, 1 = warn, 2 = error)

* eslint src/** src/**/**
* in src/index.jsx
  ```
    /*eslint-disable */
    if (module.hot) {
      module.hot.accept('./components/App', () => {
        render(App);
      });
    }
    /*eslint-enable */
  ```
* add more rules in .eslintrc.json
  ```
    "rules": {
      "react/jsx-key": 2,
      "react/jsx-uses-vars": 2,
      "react/jsx-uses-react": 2,
      "react/jsx-no-duplicate-props": 2,
      "react/jsx-no-undef": 2,
      "react/no-multi-comp": 2,
      "react/jsx-indent-props": [
          "error",
          2
        ],
      "react/jsx-pascal-case": 2,
      "react/prop-types": 2,
      "react/jsx-indent": [
          "error",
          2
      ],
      "indent": [
          "error",
          2
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ]
  }
  ```
* in package.json
  ```
    "scripts": {
      "lint": "eslint src/** src/**/**; exit 0",
  ```
* npm run lint

<dl><dt>ESLint Loader</dt></dl>

* npm install eslint-loader --save-dev
* add new rules in webpack.config.js
  ```
    rules: [
      {
         test: /\.jsx?$/,
         enforce: "pre",
         loader: "eslint-loader",
         exclude: /node_modules/,
         options: {
           emitWarning: true,
           configFile: "./.eslintrc.json"
           }
         },
         {
         test: /\.jsx?$/,
         loader: "babel-loader",
         exclude: /node_modules/,
         options: {
           presets: [
             ["es2015", {"modules": false}],
             "react",
           ],
           plugins: [
             "react-hot-loader/babel"
           ]
         }
       }
    ]
  ```
* webpack
* npm run lint
* npm run lint --fix

<dl><dt>Styling React: CSS Modules</dt></dl>

* npm install --save styled-jsx
* in webpack.config.js, add `"styled-jsx/babel"`in rules array, plugins:
* 


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
