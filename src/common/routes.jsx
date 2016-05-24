import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Layout } from 'app/layout';
import { HomeView, ErrorView } from 'views';

// Routes currently cannot be hot reloaded until this issue is fixed:
// https://github.com/reactjs/react-router/issues/2182
export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomeView} />
        <Route path="*" component={ErrorView} />
    </Route>
);
