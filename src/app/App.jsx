import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Routes } from './';
import { Layout } from 'app/layout';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body, .root-entry, .app-root {
        height: 100%;
        margin: 0;
        padding: 0;
    }
`;

const App = function(props) {
    return (
        <div className="app-root">
            <GlobalStyle />
            <Helmet
                title="React Redux Webpack Starter"
                titleTemplate="MySite.com - %s"
                defaultTitle="My Default Title"
            />

            <Layout {...props}>
                {Routes.baseRoutes(props.match)}
            </Layout>
        </div>
    );
};

App.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
};

export default App;
