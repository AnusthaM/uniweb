import { Navbar } from "flowbite-react";
import logo from "../../../assets/images/logo.png"
import { NavLink } from "react-router-dom";

export const HomeHeader = () => {
  return (
    <>
      <Navbar fluid className="bg-sky-50 shadow-md px-3">

        <img src={logo} className="mr-3 h-14 w-14" alt="UNIWEB" />

        <div className="flex md:order-2">
          <Navbar.Collapse className="me-5">
            <NavLink to="/register" className={( { isActive }: { isActive: boolean } ) => isActive ? 'md:text-sky-950 scale-110' : 'md:text-gray-500  ' + `block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 d:hover:text-white md:dark:hover:bg-transparent`}>Register</NavLink>
            <NavLink to="/login" className={( { isActive }: { isActive: boolean } ) => isActive ? 'md:text-sky-950 scale-110' : 'md:text-gray-500  ' + `block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 d:hover:text-white md:dark:hover:bg-transparent`}>Login</NavLink>

          </Navbar.Collapse>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink to="/" className={( { isActive }: { isActive: boolean } ) => isActive ? 'md:text-sky-950 scale-110' : 'md:text-gray-500  ' + `block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 `}>Home</NavLink>
          <NavLink to="/about" className={( { isActive }: { isActive: boolean } ) => isActive ? 'md:text-sky-950 scale-110' : 'md:text-gray-500  ' + `block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 `}>About</NavLink>
          <NavLink to="/blogs" className={( { isActive }: { isActive: boolean } ) => isActive ? 'md:text-sky-950 scale-110' : 'md:text-gray-500  ' + `block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 `}>Blogs</NavLink>
          <NavLink to="/contact" className={( { isActive }: { isActive: boolean } ) => isActive ? 'md:text-sky-950 scale-110' : 'md:text-gray-500  ' + `block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 `}>Contact</NavLink>
          <NavLink to="/ugrad" className={( { isActive }: { isActive: boolean } ) => isActive ? 'md:text-sky-950 scale-110' : 'md:text-gray-500  ' + `block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 `}>UnderGrad</NavLink>
          <NavLink to="/grad" className={( { isActive }: { isActive: boolean } ) => isActive ? 'md:text-sky-950 scale-110' : 'md:text-gray-500  ' + `block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 `}>Grad</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
