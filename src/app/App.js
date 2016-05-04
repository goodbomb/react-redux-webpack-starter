import React from 'react';
import cssModules from 'react-css-modules';
import styles from './app.scss';

const App = function() {
    return (
        <div styleName="app">It's alive with Hot Module Replacement!</div>
    );
};

export default cssModules(App, styles);
