const ADD = 'ADD';
const REMOVE = 'REMOVE';

export const addBook = (title, author) => ({
  type: ADD,
  title,
  author,
});

export const removeBook = (id) => ({
  type: REMOVE,
  id,
});

const bookRed = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, { title: action.title, author: action.author }];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookRed;
