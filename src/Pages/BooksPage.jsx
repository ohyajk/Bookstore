import React from "react";
import AddBookForm from "../components/AddBookForm";
import BooksList from "../components/BooksList";

const BooksPage = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <BooksList/>
      <AddBookForm/>
    </div>
  )
}

export default BooksPage;