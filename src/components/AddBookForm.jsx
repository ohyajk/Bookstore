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
    <div className="w-[100%] my-8 px-8">
      <h2 className="opacity-50 font-semibold text-2xl py-4">Add New Book</h2>
      <form onSubmit={add} className="flex flex-grow justify-between gap-8 ">
        <input name="title" className="p-2 border border-black/20 w-full text-black outline-none " type="text" placeholder="Book Title" onChange={(e) => setBook({ ...book, title: e.target.value })} required />
        <input name="author" className="p-2 border border-black/20 w-full text-black outline-none " type="text" placeholder="Book Author" onChange={(e) => setBook({ ...book, author: e.target.value })} required />
        <input className="border border-black/20 bg-[#0290ff] text-white w-full p-2 cursor-pointer " type="submit" value="ADD BOOK" onClick={() => setBook({ ...book, id: myTime })} />
      </form>
    </div>
  );
};

export default AddBookForm;
