import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BooksPage from "./pages/BooksPage";
import CategoriesPage from "./pages/CategoriesPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App