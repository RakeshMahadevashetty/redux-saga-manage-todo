import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./rootReducer";
import rootSaga from "./todoSagas";

const sagaMiddleWare = createSagaMiddleware();

const middleware = [sagaMiddleWare];

if (process.env.NODE_ENV === 'development') {
    /**
     * It will be enabled only in developement field for debug purpose
     */
    middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleWare.run(rootSaga);

export default store;