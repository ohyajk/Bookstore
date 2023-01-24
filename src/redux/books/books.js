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

const bookRed = (state = [{ title: 'book1', author: 'author1', id: 'id1' }, { title: 'book2', author: 'author2', id: 'id2' }], action) => {
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
