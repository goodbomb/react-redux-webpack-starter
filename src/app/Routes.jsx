import React from 'react';
import { Router } from '@reach/router';
import { HomeView, ErrorView } from './';

const Routes = function() {
    return (
        <Router>
            <HomeView path="/" />
            <ErrorView default={true} />
        </Router>
    );
};

export default Routes;
