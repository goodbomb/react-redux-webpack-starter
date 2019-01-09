import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const rootReducer = history => combineReducers({
    form,
    router: connectRouter(history)
});

export default rootReducer;
