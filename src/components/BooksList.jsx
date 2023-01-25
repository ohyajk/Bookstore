import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayBooks } from '../redux/books/books';
import Book from './Book';

const BooksList = () => {
  const list = useSelector((state) => state.bookRed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayBooks());
  }, []);

  return (
    <div className="py-10 w-[100%]">
      {list.map((book) => (
        <Book title={book.title} author={book.author} key={book.item_id} id={book.item_id} />
      ))}
    </div>
  );
};

export default BooksList;
