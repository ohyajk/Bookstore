import React from 'react';

const Book = () => (
  <div className="flex w-[500px] justify-between items-center border-2 border-white/30 p-2 rounded-lg shadow-md">
    <div>
      <h4 className="text-2xl">Book Title 1</h4>
      <p>Book Author 1</p>
    </div>
    <button className="border-2 border-fuchsia-500 p-2 cursor-pointer rounded-lg">Remove</button>
  </div>
);

export default Book;
