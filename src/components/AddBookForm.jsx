import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({});

  const add = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    e.target.title.value = '';
    e.target.author.value = '';
  };
  const myTime = Date.now();
  return (
    <div>
      <form onSubmit={add} className="flex gap-2">
        <input name="title" className="p-2 text-black outline-none rounded-lg" type="text" placeholder="Book Title" onChange={(e) => setBook({ ...book, title: e.target.value })} required />
        <input name="author" className="p-2 text-black outline-none rounded-lg" type="text" placeholder="Book Author" onChange={(e) => setBook({ ...book, author: e.target.value })} required />
        <input className="bg-fuchsia-500 p-2 cursor-pointer rounded-lg" type="submit" value="ADD BOOK" onClick={() => setBook({ ...book, id: myTime })} />
      </form>
    </div>
  );
};

export default AddBookForm;
