import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../app/layout/Layout';
import { HomeView, ErrorView } from 'views';

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomeView} />
        <Route path="*" component={ErrorView} />
    </Route>
);
