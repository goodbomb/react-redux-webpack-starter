import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import App from 'app/App';
import rootReducer from 'config/rootReducer';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </AppContainer>
    </Provider>
    , document.getElementById('root')
);

/*eslint-disable */

// Required for Hot Module Replacement
if (module.hot) {
    module.hot.accept('./app/App', () => {
        const NextApp = require('./app/App').default;

        ReactDOM.render(
            <Provider store={store}>
                <AppContainer>
                    <NextApp history={history} />
                </AppContainer>
            </Provider>
            , document.getElementById('root')
        );
    });
}
/*eslint-enable */
