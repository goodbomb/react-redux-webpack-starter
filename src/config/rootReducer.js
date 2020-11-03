import { combineReducers } from 'redux';
import { AppReducer } from 'app/common';

const rootReducer = () => combineReducers({
    app: AppReducer
});

export default rootReducer;
