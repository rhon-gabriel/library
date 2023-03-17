import { GET_BOOKS_START } from "./constants";

export function getBooks(params) {
    console.log('params', params)
  return {
    type: GET_BOOKS_START,
    payload: params,
  };
}
