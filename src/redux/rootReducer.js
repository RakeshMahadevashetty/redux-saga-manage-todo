import { combineReducers } from 'redux';

import todoReducer from './reducer';

const rootReducer = combineReducers({
    data: todoReducer
})

export default rootReducer;