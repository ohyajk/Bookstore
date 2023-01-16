import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="shadow-md shadow-white/30 flex justify-between items-center px-[10vh] py-4">
        <nav>
            <h1 className="logo text-4xl font-semibold">JK's BOOKSTORE</h1>
        </nav>
        <ul className="flex gap-4">
            <Link to='/'>BOOKS</Link>
            <Link to='/categories'>CATEGORIES</Link>
        </ul>
    </div>
  )
}

export default Navbar