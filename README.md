# React + Redux + Webpack Starter

## Getting started

1. Fork this repository.
2. Clone your forked repository.
3. Run ```npm install``` from the command line inside of the root directory.
4. Execute any of the following commands to get started:

| Task                  | Description
| -------------         | -------------
| npm start             | Builds the development environment and starts the dev server on `http://localhost:5000`.
| npm run build         | Builds the production ready code. All files are generated in the `/dist` directory.
| npm run build:run     | Builds the production ready code and starts the server.js file on `http://localhost:5000` by default.
| npm test              | Executes all tests in the `./src` directory.
| npm run test:watch    | Executes all tests in the `./src` directory and watches for changes to tests.
| npm run test:coverage | Executes all tests in the `./src` directory and generates coverage reports.


## Application Architecture

See http://marmelab.com/blog/2015/12/17/react-directory-structure.html
and http://survivejs.com/webpack_react/structuring_react_projects/

This application architecture follows a more modern convention for React application architecture than what most people use in their boilerplate code and tutorials. The structure of the Viu application will be organized hierarchically by _domain_ instead of _nature_ (the conventional architectural pattern).
The application structure looks something like this:

```
root/
└── src/
    ├── index.html
    ├── main.jsx                // entry point for the React app
    ├── app/
    │   ├── common/             // contains all shared components
    │   ├── layout/
    │   │   ├── index.js
    │   │   ├── HeaderComponent.jsx
    │   │   ├── HeaderComponent.spec.js
    │   │   └── Layout.jsx
    │   ├── App.jsx
    │   └── index.js
    └──  config/
        ├── index.js
        └── rootReducer.js
```

## Modifying the Build Configuration

The application build is handled primarily by [Webpack][Webpack] and executed using NPM scripts in the ```package.json``` file.

**WARNING** Please be conscious of the fact that there are two build configs (one for Development, and one for Production). If you make changes to the Dev configuration, make sure that it's reflected in the Production configuration as well (if it's not only a development configuration).


## ES5 vs ES6 Javascript

Make use of ES6 Javascript wherever possible (especially when defining stateful components using the _class_ syntax - ie. Containers). For example, a basic React Container (component with state) should look like this:

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

This boilerplate uses [Styled-Components][Styled-Components] for styling React components. It is a powerful library that allows you to write styles using standard CSS syntax while leveraging the full power of JavaScript.

CSS styles are style checked using [StyleLint][StyleLint] whenever a file has changed.

The full set of style lint rules are found in the ```.stylelintrc``` file. See [the StyleLint rule definitions][StyleLintDefs] for a full explanation fo what each rule does.


## Tests

All tests files should follow the ```*.spec.js``` pattern and should reside alongside the file that's being tested. For example:

```
src/
    main.js
    main.spec.js
```

Tests are using [Jest][Jest] and [Enzyme][Enzyme].


## Server

This React / Redux application is served using a simple Express server defined in the `server.js` file. By default, running `npm start` will serve the React application on `http://localhost:5000`.

It also uses a proxy to forward all API requests made from the `/api` path to `http://localhost:5555` by default. For example, sending a request to `http://localhost:5000/api/endpoint` will send the actual request to `<API_URL>/endpoint`. To specify a different URL for the API, create a `.env` file in the root directory and add `API_URL=https://<insert api url>`.


## Tech Stack

**Javascript Framework(s):**
- [React][React]
- [Redux][Redux]

**Build Tools(s):**
- [Webpack][Webpack]
- NPM Scripts

**Test Framework(s):**
- [Jest][Jest]
- [Enzyme][Enzyme]

**CSS Styling:**
- [Styled Components][Styled-Components]

**Linting and Checkstyle:**
- [ESLint][ESLint]
- ESLint React Plugin
- ESLint Airbnb configuration
- [StyleLint][StyleLint]

**Other Tools:**
- ES6
- Babel (for converting ES6 into ES5 syntax)
- Babel Webpack Loader
- [Axios][https://github.com/axios/axios] (easy-to-use Promise-based HTTP client)

**Recommended Tools:** (not included in this boilerplate)
- [Material UI][http://www.material-ui.com/]
- [Material Icons][https://material.io/icons/] (these are available inherently as part of Material UI)
- [Redux Form][https://redux-form.com/]



[React]: https://reactjs.org/
[Redux]: http://redux.js.org/
[Styled-Components]: https://www.styled-components.com/
[ESLint]: https://eslint.org/
[StyleLint]: https://github.com/stylelint/stylelint
[StyleLintDefs]: https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md
[Webpack]: https://webpack.github.io/
[Jest]: http://facebook.github.io/jest/
[Enzyme]: http://airbnb.io/enzyme/
