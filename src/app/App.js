/* eslint react/prefer-stateless-function: "off" */
// Remove the eslint comment above once this component is hooked up to Redux.

import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './app.scss';

class App extends Component {
    render() {
        return (
            <div styleName="app">It's alive with Hot Module Replacement!</div>
        );
    }
}

export default cssModules(App, styles);
