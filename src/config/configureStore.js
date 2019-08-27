import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from './rootReducer';

export default function configureStore(initialState, history) {
    const middleware = [
        ReduxThunk,
        promiseMiddleware
    ];

    const enhancer = compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    );

    const store = createStore(rootReducer(history), initialState, enhancer);

    return store;
}
