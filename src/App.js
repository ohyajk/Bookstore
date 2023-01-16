import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<BooksPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
