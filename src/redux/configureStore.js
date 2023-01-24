import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookRed from './books/books';
import categoriesRed from './categories/categories';

const reducer = combineReducers({
  bookRed,
  categoriesRed,
});

const store = configureStore({ reducer });
export default store;
