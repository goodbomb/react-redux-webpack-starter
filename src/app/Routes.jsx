import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import { HomeView, ErrorView } from './';

/**
 * These routes are ONLY the base routes that are necessary in order to not trigger the ErrorView.
 *
 * With React Router 4, Routes are now used as actual component-templates and child routes are rendered in parent component-templates.
 * React Router 4 has a different philosophy to routing than a traditional static router.
 * Routes are not all defined in a single location anymore and can be used to conditionally render content based on the route.
 */
export const Routes = {
    baseRoutes: () => {
        return (
            <div className="routes">
                <Switch>
                    <Route path="/" exact={true} component={HomeView} />

                    <Route component={ErrorView} />
                </Switch>
            </div>
        );
    }
};

export default Routes;
