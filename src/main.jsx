import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './app/App';
import rootReducer from './common/rootReducer';
import './main.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(rootReducer);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            <App history={history} />
        </AppContainer>
    </Provider>
    , document.getElementById('main')
);

/*eslint-disable */

// Required for Hot Module Replacement
if (module.hot) {
    module.hot.accept('./app/App', () => {
        const NextApp = require('./app/App').default;

        ReactDOM.render(
            <Provider store={store}>
                <AppContainer>
                    <NextApp />
                </AppContainer>
            </Provider>
            , document.getElementById('main')
        );
    });
}
/*eslint-enable */
