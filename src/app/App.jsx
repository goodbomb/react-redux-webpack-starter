import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Route } from 'react-router-dom';
import { Layout } from 'app/layout';

const App = function() {
    return (
        <div className="app-root">
            <Helmet
                title="React Redux Webpack Starter"
                titleTemplate="MySite.com - %s"
                defaultTitle="My Default Title"
            />

            <Route path="/" component={Layout} />
        </div>
    );
};

App.propTypes = {
    history: PropTypes.object
};

export default App;
