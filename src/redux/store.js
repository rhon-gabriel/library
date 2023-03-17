import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";
import booksSaga from "../components/Books/redux/saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(booksSaga);

export default store;
