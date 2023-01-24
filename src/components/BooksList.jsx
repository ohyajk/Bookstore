import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const list = useSelector((state) => state.bookRed);
  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold py-4">Your Books List</h2>
      {list.map((book) => (
        <Book title={book.title} author={book.author} key={book.id} id={book.id} />
      ))}
    </div>
  );
};

export default BooksList;
