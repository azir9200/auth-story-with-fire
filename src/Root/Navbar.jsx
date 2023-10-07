import { NavLink } from "react-router-dom";



const Navbar = () => {


  return (
    <div>

      <nav className="flex justify-around items-center py-6 shadow-md "  >
        <p className="font-semibold text-blue-500 " >Community and Cultural Events</p>
        <ul className="flex text-red-600 gap-8 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400 underline " : ""}  >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "  text-green-500 underline " : ""}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline " : ""}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline " : ""}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;