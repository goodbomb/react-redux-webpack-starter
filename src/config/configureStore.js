import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { rootReducer } from 'common';

const createStoreWithMiddleware = applyMiddleware(
    ReduxThunk
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    /*eslint-disable */
    if(module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../common/rootReducer', () => {
            const nextReducer = require('../common/rootReducer').default;

            store.replaceReducer(nextReducer);
        });
    }
    /*eslint-enable */

    return store;
}
