import { sendData, deleteData, getData } from './fetchBooks';

const ADD = 'bookStore/books/ADD_BOOK';
const REMOVE = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sbGl1TCfNFEAEVgcqoPo/books';

export const fetchBooks = (payload) => ({
  type: FETCH_BOOKS,
  payload,
});

export const addBook = (payload) => async (dispatch) => {
  await sendData(URL, payload);
  return dispatch({ type: ADD, payload });
};

export const removeBook = (index) => async (dispatch) => {
  await deleteData(URL, index);
  return dispatch({ type: REMOVE, payload: index });
};

export const displayBooks = () => async (dispatch) => {
  const books = await getData(URL);
  const bookArr = [];
  Object.keys(books).forEach((id) => {
    bookArr.push({
      item_id: id,
      title: books[id][0].title,
      author: books[id][0].author,
    });
  });
  dispatch(fetchBooks(bookArr));
};

const bookRed = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((book) => book.item_id !== action.payload);
    case FETCH_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default bookRed;
