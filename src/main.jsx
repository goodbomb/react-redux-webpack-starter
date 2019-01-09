import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'connected-react-router';
import App from 'app/App';
import { axiosConfig, configureStore } from 'config';

const INITIAL_STATE = {};
const history = createHistory();
const store = configureStore(INITIAL_STATE, history);

const MOUNT_NODE = document.getElementById('root');

axiosConfig();

ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </AppContainer>
    </Provider>
    , MOUNT_NODE
);

/* eslint-disable */

// Required for Hot Module Replacement
if (module.hot) {
    module.hot.status();
    module.hot.accept('./app/App', () => {
        const NextApp = require('./app/App').default;

        ReactDOM.render(
            <Provider store={store}>
                <AppContainer>
                    <ConnectedRouter history={history}>
                        <NextApp />
                    </ConnectedRouter>
                </AppContainer>
            </Provider>
            , MOUNT_NODE
        );
    });
}

/* eslint-enable */
