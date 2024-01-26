import {
        applyMiddleware,
        createStore
} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import {
        composeWithDevTools
} from "redux-devtools-extension";
import {rootReducer} from "../react-saga/rootReducer";
import {
        rootSaga
} from "./saga/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;