
import {
  GET_BOOKS_START,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE,
} from "./constants";

const initialState = {
  results: null,
  loading: false,
  error: false,
};

export default function booksReducer(state = initialState, action) {
    switch (action.type) {
      case GET_BOOKS_START:
        return {
          ...state,
          loading: true,
          error: false,
        };
      case GET_BOOKS_SUCCESS:
        return {
          ...state,
          results: action.results,
          loading: false,
          error: false,
        };
      case GET_BOOKS_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
      default:
        return state;
    }
  }
  