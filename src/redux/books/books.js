const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';

export const addBook = (payload) => ({
  type: ADD,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE,
  id: payload,
});

const bookRed = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookRed;
