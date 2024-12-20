import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      

<NavLink to="/" className={({isActive})=> isActive ? 'border transition px-2 lg:px-4 rounded-lg py-2 border-[#23BE0A] text-[#23BE0A] bg-white hover:bg-[#23BE0A] hover:text-white' : ''}>Home</NavLink>
<NavLink to="/listedbooks" className={({isActive})=> isActive ? 'border transition px-2 lg:px-4 rounded-lg py-2 border-[#23BE0A] text-[#23BE0A] bg-white hover:bg-[#23BE0A] hover:text-white' : ''}>Listed Books</NavLink>
<NavLink to="/pagestoread" className={({isActive})=> isActive ? 'border px-4 rounded-lg py-2 border-[#23BE0A] text-[#23BE0A] bg-white hover:bg-[#23BE0A] hover:text-white' : ''}>Pages to Read</NavLink>
<NavLink to="/authors" className={({isActive})=> isActive ? 'border px-4 rounded-lg py-2 border-[#23BE0A] text-[#23BE0A] bg-white hover:bg-[#23BE0A] hover:text-white' : ''}>Authors</NavLink>
<NavLink to="/contact" className={({isActive})=> isActive ? 'border px-4 rounded-lg py-2 border-[#23BE0A] text-[#23BE0A] bg-white hover:bg-[#23BE0A] hover:text-white' : ''}>Contact Us</NavLink>
<NavLink to="/about" className={({isActive})=> isActive ? 'border px-4 rounded-lg py-2 border-[#23BE0A] text-[#23BE0A] bg-white hover:bg-[#23BE0A] hover:text-white' : ''}>About Us</NavLink>
 </>
  );

  return (
    <div className="navbar bg-base-100  fixed z-10 lg:-ml-32">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to='/' className="btn lg:ml-2 pl-0 lg:pl-4 btn-ghost text-lg lg:text-2xl font-bold ">
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 lg:flex lg:gap-6 items-center">
            {links}
        </ul>
      </div>
      <div className="navbar-end text-lg font-semibold">
        <a className="btn lg:px-5 bg-[#23BE0A] text-white hover:bg-white hover:text-black hover:border-[#23BE0A] mr-2">
          Sign In
        </a>
        <a className="btn lg:px-5 bg-[#59C6D2] text-white hover:bg-white hover:text-black hover:border-[#59C6D2]">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
