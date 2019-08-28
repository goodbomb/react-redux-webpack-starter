import { hot } from 'react-hot-loader';
import React from 'react';
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
                <Routes />
            </Layout>
        </div>
    );
};

export default hot(module)(App);
