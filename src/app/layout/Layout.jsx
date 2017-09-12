import React from 'react';
import Header from './Header';
import {
    Switch,
    Route } from 'react-router-dom';
import { HomeView, ErrorView } from 'app';

const Layout = function() {
    return (
        <div className="layout">
            <Header />

            <Switch>
                <Route exact={true} path="/" component={HomeView} />
                <Route component={ErrorView} />
            </Switch>
        </div>
    );
};

export default Layout;
