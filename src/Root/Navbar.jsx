import { NavLink } from "react-router-dom";


const Navbar = () => {

  return (
    <div className="" >

      <nav className="grid sm:grid-flow-col md:grid-cols-2  justify-around bg-blue-200 items-center py-6 shadow-md  "  >
        <p className="font-bold text-2xl ml-6 text-blue-700" >Community and Cultural Events</p>
        <ul className="flex  text-xl font-bold text-red-600 gap-8 ">
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
        <ul className="flex  text-xl font-bold text-red-600 gap-8 ">
          <li className="mr-6" >
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline " : ""}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;