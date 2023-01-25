import React from 'react';
import AddBookForm from '../components/AddBookForm';
import BooksList from '../components/BooksList';

const BooksPage = () => (
  <div className="flex flex-col flex-grow w-[100%] justify-center items-center bg-[#fafafa] ">
    <BooksList />
    <AddBookForm />
  </div>
);

export default BooksPage;
