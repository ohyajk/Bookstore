import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookRed from './books/books';
import categoryRed from './categories/categories';

const reducer = combineReducers({
  bookRed,
  categoryRed,
});

const store = configureStore({ reducer });
export default store;
