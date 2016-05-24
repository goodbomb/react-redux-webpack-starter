import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import cssModules from 'react-css-modules';
import { Router } from 'react-router';
import styles from './app.scss';
import routes from '../common/routes';

const App = function(props) {
    return (
        <div>
            <Helmet
                title="React Redux Webpack Starter"
                titleTemplate="MySite.com - %s"
                defaultTitle="My Default Title"
            />

            <Router routes={routes} history={props.history} />
        </div>
    );
};

App.propTypes = {
    history: PropTypes.object
};

export default cssModules(App, styles);
