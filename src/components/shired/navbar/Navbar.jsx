import { NavLink } from "react-router";

const Navbar = () => {
  const lists = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
           `font-semibold  ${isActive ? "text-green-500 border border-green-500" : ""} 
          `}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/books"}
          className={({ isActive }) =>
           `font-semibold  ${isActive ? "text-green-500 border border-green-500" : ""} 
          `}
        >
          Listed Books
        </NavLink>
      </li>

      <li>
        <NavLink to={"/page-to-read"}
         className={({ isActive }) =>
           `font-semibold  ${isActive ? "text-green-500 border border-green-500" : ""} 
          `}>Page-To-Read</NavLink>
      </li>
    </>
  );

  return (
   <nav className="">
     <div className="navbar bg-base-100 shadow-sm px-4 container mx-auto">
      {/* Mobile Dropdown */}
      <div className="dropdown lg:hidden ml-2">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          ☰
        </div>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 
                       rounded-box z-10 mt-3 w-52 p-2 shadow"
        >
          {lists}
        </ul>
      </div>
      {/* Logo + Mobile Menu */}
      <div className="navbar-start">
        <div className="text-2xl font-bold text-green-300">
          📚 <span className="text-blue-300">B</span>ook-Store
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{lists}</ul>
      </div>

      {/* Sign In */}
      <div className="navbar-end gap-2">
        <button className="btn btn-primary">Sign In</button>
        <button className="btn  btn-success text-white">Sign Up</button>

      </div>
    </div>
   </nav>
  );
};

export default Navbar;
