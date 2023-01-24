/* eslint react/prop-types: 0 */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex w-[500px] justify-between items-center border-2 border-white/30 p-2 rounded-lg shadow-md">
      <div>
        <h4 className="text-2xl">{title}</h4>
        <p>{author}</p>
      </div>
      <button onClick={() => dispatch(removeBook(id))} type="button" className="border-2 border-fuchsia-500 p-2 cursor-pointer rounded-lg">Remove</button>
    </div>
  );
};

export default Book;
