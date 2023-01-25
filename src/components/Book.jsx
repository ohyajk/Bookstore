import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex my-8 mx-8 justify-between items-center border-2 border-white/30 p-2 rounded-lg shadow-md">
      <div className="flex flex-col">
        <h4 className="text-2xl">{title}</h4>
        <p className="text-[#0290ff]">{author}</p>
        <div className="py-2">
          <button type="button" className="text-[#0290ff] pr-2 cursor-pointer ">Comments</button>
          <button onClick={() => dispatch(removeBook(id))} type="button" className="text-[#0290ff] pr-2 cursor-pointer ">Remove</button>
          <button type="button" className="text-[#0290ff] pr-2 cursor-pointer ">Edit</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
