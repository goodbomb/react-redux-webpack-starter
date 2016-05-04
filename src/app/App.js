import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.css';

const App = function() {
    return (
        <div styleName="app">It's alive with Hot Module Replacement!</div>
    );
};

export default CSSModules(App, styles);
