import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex my-8 mx-8 justify-between items-center border-2 border-white/30 p-2 rounded-lg shadow-md">
      <div className="flex flex-col">
        <h6 className="opacity-50">Novel</h6>
        <h4 className="text-2xl">{title}</h4>
        <p className="text-[#0290ff]">{author}</p>
        <div className="py-2">
          <button type="button" className="text-[#0290ff] pr-2 cursor-pointer ">Comments</button>
          <button onClick={() => dispatch(removeBook(id))} type="button" className="text-[#0290ff] pr-2 cursor-pointer ">Remove</button>
          <button type="button" className="text-[#0290ff] pr-2 cursor-pointer ">Edit</button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8">
        <div className="progress-img" />
        <div>
          <h4 className="text-2xl">64%</h4>
          <h6 className="opacity-50">Completed</h6>
        </div>
        <div className="after:block after:bg-black/50 after:w-[1px] after:h-20 after:mx-auto after:my-2 opacity-50" />
        <div className="flex flex-col gap-2 pl-8 pr-4">
          <h6 className="opacity-50">Current Chapter</h6>
          <h4>Chapter 3</h4>
          <button className="bg-[#0290ff] p-2 text-white" type="button">Update Progress</button>
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
