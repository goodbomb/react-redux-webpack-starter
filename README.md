# React + Redux + Webpack Starter

## Getting started

1. Fork this repository.
2. Clone your forked repository.
3. Run ```npm install``` from the command line inside of the Viu-FE directory.
4. Execute any of the following commands to get started:

| Task              | Description   
| -------------     |:-------------:
| npm start         | Builds the development environment and starts the dev server on `http://localhost:5000`.
| npm run build     | Builds the production ready code. All files are generated in the `/dist` directory.
| npm run build:run | Builds the production ready code and starts the server.js file on `http://localhost:5000` by default.
| npm run lint:js   | Manually execute the javascript linter (eslint). This is also done automatically during the build process.
| npm test          | Executes all tests in the `./src` directory.


## Application Architecture

See http://marmelab.com/blog/2015/12/17/react-directory-structure.html 
and http://survivejs.com/webpack_react/structuring_react_projects/

This application architecture follows a more modern convention for React application architecture than what most people use in their boilerplate code and tutorials. The structure of the Viu application will be organized hierarchically by _domain_ instead of _nature_ (the conventional architectural pattern).
The application structure looks something like this:

```
root/
└── src/
    ├── index.html
    ├── main.jsx               // entry point for the React app
    ├── main.scss
    ├── app/
    │   ├── App.jsx
    │   ├── App.spec.js
    │   └── app.scss
    ├── common/
    │   ├── Footer.jsx
    │   ├── Header.jsx
    │   └── rootReducer.js
    ├── routes/
    │   ├── Routes.jsx
    │   ├── Routes.spec.js
    │   └── index.js
    └── views/
        ├── loginView/
        │   ├── LoginView.jsx
        │   ├── LoginView.spec.js
        │   └── login-view.scss
        └── registerView/
            ├── RegisterView.jsx
            ├── RegisterView.spec.js
            └── register-view.scss
```

## Modifying the Build Configuration

The application build is handled primarily by [Webpack][Webpack] and executed using NPM scripts in the ```package.json``` file.

**WARNING** Please be conscious of the fact that there are two build configs (one for Development, and one for Production). If you make changes to the Dev configuration, make sure that it's reflected in the Production configuration as well (if it's not only a development configuration).


## ES5 vs ES6 Javascript

We should make use of ES6 Javascript wherever possible (especially when defining stateful components using the _class_ syntax - ie. Containers). For example, a basic React Container (component with state) should look like this:

```
import React, { Component } from 'react';

class MyComponent extends Component {

  render() {
    return (
        <div className="my-component"></div>
    );
  }

};

export default MyComponent;
```

Whereas a _stateless_ React Component should be a _pure function_ like this:

```
import React from 'react';

const MyComponent = function() {

    return (
        <div className="my-component"></div>
    );

};

export default MyComponent;
```

## CSS Styles

We are using [PostCSS][PostCSS] coupled with [PreCSS][PreCSS] and [React CSS Modules][React CSS Modules] for styling our react modules. This means that CSS files can be written in vanilla CSS or SCSS syntax, but **we since we are using _SCSS_ syntax**, all CSS files should use the ```.scss``` extension to make it clear that the file contains non-vanilla CSS. 

_All CSS files should reside alongside the React component that the styles apply to_. For example:

```
views/
    user/
        user.scss // contains the styles for the User component
        User.js
```

Since we are using React CSS Modules, adding styles to HTML work a bit differently. We do something like this (note the use of the CSSModules class when exporting the component, and the "styleName" syntax in the JSX):

```
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.css';

const App = function() {
    return (
        <div styleName="app">It's alive with Hot Module Replacement!</div>
    );
};

export default CSSModules(App, styles);
```

CSS styles are linted using [StyleLint][StyleLint].

The full set of style lint rules are found in the ```.stylelintrc``` file. See [the StyleLint rule definitions][StyleLintDefs] for a full explanation fo what each rukle does.

These rules are not set in stone. EA does not currently have a standard, so if there is a good reason to modify one of the rules, make your case to the Front End Lead.


## Tests

All tests files should follow the ```*.spec.js``` pattern and should reside alongside the file that's being tested. For example:

```
src/
    main.js
    main.spec.js
```

Our tests use [Mocha][Mocha] as the build runner and [Chai][Chai] as the assertion library. Tests should be written using the standard test ```assert``` convention, _not_ the BDD-style ```expect``` convention.


## Tech Stack

**Javascript Framework(s):**
- React
- Redux

**HTML Framework(s):**
- React Toolbox

**CSS Processor:**
- PostCSS + Plugins (PreCSS, React CSS Modules, etc)

**Build Tools(s):**
- Webpack
- NPM Scripts

**Test Framework(s):**
- Mocha / Chai / Sinon (for unit testing)
- Vertex (for functional testing)

**Linting and Checkstyle:**
- ESLint
- ESLint React Plugin
- ESLint Airbnb configuration
- StyleLint postCSS plugin

**Other Tools:**
- ES6
- Babel (for converting ES6 into ES5 syntax)
- Babel Webpack Loader
- Material Design Icons




[StyleLint]: https://github.com/stylelint/stylelint
[StyleLintDefs]: https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md
[Webpack]: https://webpack.github.io/
[PostCSS]: https://github.com/postcss/postcss
[PreCSS]: https://github.com/jonathantneal/precss
[React CSS Modules]: https://github.com/gajus/react-css-modules
[Mocha]: https://mochajs.org/
[Chai]: http://chaijs.com/api/assert/
