import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createHistory, LocationProvider } from '@reach/router';
import App from 'app/App';
import { axiosConfig, configureStore } from 'config';

const INITIAL_STATE = {};
const history = createHistory(window);
const store = configureStore(INITIAL_STATE, history);

const MOUNT_NODE = document.getElementById('root');

axiosConfig();

ReactDOM.render(
    <Provider store={store}>
        <LocationProvider history={history}>
            <App />
        </LocationProvider>
    </Provider>
    , MOUNT_NODE
);
