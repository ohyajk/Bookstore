import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="border border-b-black/10 flex gap-16 items-center justify-between px-[10vh] py-4 bg-white">
    <nav className="flex items-center">
      <h1 className="text-4xl font-semibold text-[#0290ff]">BOOKSTORE CMS</h1>
      <ul className="flex pl-8 gap-4">
        <Link to="/">BOOKS</Link>
        <Link to="/categories">CATEGORIES</Link>
      </ul>
    </nav>
    <div className="flex border p-2 rounded-full">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQ0lEQVR4nO2UvUoDQRSFFwsttVQEN3OTWPgC+iTiQxhfIZ0/5+aHPJCWGqsEsbIwoHvvRouIRGIZmSWaQsxOdDQqe+A0MwMfZ+7MCYJMv1GFxtUCsewRpEmQp5GbeUjJ7n0LtFi9WSVom1iHH7hlz/hPionQN7jX5GSvNx2a2LDs+gSfu4IJcuYNbCB958SQvjcwuaYdeVaJH//+jPOQ0kxedSFpLG25/OON8uV84L25eCLcf3O9yqaxV2nnaB9cYtZTu+Y9aaafVXk4F1a7W8R6YFhOiCUm1ufEEDWQY4Lu5zjetGe/zFur3a8QpEaQrntlSkyQSoi75amBYb2zZKANgg6m7elxg+nAsNbpsLfoBDWVaJ1YOp8Gvq/Qazq6LaaCCXLhDTpO33YBq2+wgUbpYI52CPrgEdzLcbztNOdM/0ovVkGsmUf5Fe8AAAAASUVORK5CYII=" alt="user" />
    </div>
  </div>
);

export default Navbar;
