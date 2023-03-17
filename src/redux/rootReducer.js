import { combineReducers } from "redux";
import booksReducer from "../components/Books/redux/reducer";

const rootReducer = combineReducers({
  books: booksReducer,
});

export default rootReducer;
