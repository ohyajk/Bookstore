import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="border border-b-black/10 flex gap-16 items-center px-[10vh] py-4 bg-white">
    <nav>
      <h1 className="text-4xl font-semibold text-[#0290ff]">BOOKSTORE CMS</h1>
    </nav>
    <ul className="flex gap-4">
      <Link to="/">BOOKS</Link>
      <Link to="/categories">CATEGORIES</Link>
    </ul>
  </div>
);

export default Navbar;
