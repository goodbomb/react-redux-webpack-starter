import React from 'react';
import Helmet from 'react-helmet';
import cssModules from 'react-css-modules';
import styles from './app.scss';

const App = function() {
    return (
        <div>
            <Helmet
                title="React Redux Webpack Starter"
                titleTemplate="MySite.com - %s"
                defaultTitle="My Default Title"
            />
            <div styleName="app">It's alive with Hot Module Replacement!</div>
        </div>
    );
};

export default cssModules(App, styles);
