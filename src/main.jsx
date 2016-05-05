import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';

import App from './app/App';
import rootReducer from './common/rootReducer';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            <App />
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
                    <NextApp />
                </AppContainer>
            </Provider>
            , document.getElementById('root')
        );
    });
}
/*eslint-enable */
