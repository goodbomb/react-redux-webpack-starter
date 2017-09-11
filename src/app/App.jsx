import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Router } from 'react-router';
import { routes } from 'common';

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

export default App;
