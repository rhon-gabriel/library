import { all } from "redux-saga/effects";
import booksSaga from "../components/Books/redux/saga";

export default function* rootSaga() {
  yield all([booksSaga()]);
}
