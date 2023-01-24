import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    books: [],
  },
});

export default store;
