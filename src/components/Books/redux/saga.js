import { takeLatest, put, call } from "redux-saga/effects";
import {
    GET_BOOKS_START,
    GET_BOOKS_SUCCESS,
    GET_BOOKS_FAILURE,
  } from "./constants";
import {
  getBooks,
} from "../../../helpers/api/books";

export function* getBooksSaga(action) {
  try {
    const res = yield call(getBooks, action.payload);
    yield put({
      type: GET_BOOKS_SUCCESS,
      results: res.data
    });
  } catch (error) {
    yield put({
      type: GET_BOOKS_FAILURE,
      error,
    });
    console.log("Something went wrong");
  }
}

export default function* booksSaga() {
  yield takeLatest(GET_BOOKS_START, getBooksSaga);
}
