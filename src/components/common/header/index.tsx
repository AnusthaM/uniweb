import { Navbar } from "flowbite-react";
import logo from "../../../assets/images/logo.png"
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { NavLink } from "react-router-dom";
export const HomeHeader = () => {
  return (
    <>
      <Navbar fluid rounded className="bg-slate-100 shadow-md px-3">
        <Navbar.Brand to="https://flowbite-react.com">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Uni</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Collapse className="me-5">
            <NavLink to="/register" className={( { isActive }: { isActive: boolean } ) => isActive ? 'md:text-cyan-700' : 'md:text-gray-700  ' + `block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 d:hover:text-white md:dark:hover:bg-transparent`}>Register</NavLink>
            <NavLink to="/login" className={( { isActive }: { isActive: boolean } ) => isActive ? 'md:text-cyan-700' : 'md:text-gray-700  ' + `block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 d:hover:text-white md:dark:hover:bg-transparent`}>Login</NavLink>

          </Navbar.Collapse>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink to="/" className={( { isActive }: { isActive: boolean } ) => isActive ? 'md:text-cyan-700' : 'md:text-gray-700  ' + `block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 `}>Home</NavLink>
          <NavLink to="/about" className={( { isActive }: { isActive: boolean } ) => isActive ? 'md:text-cyan-700' : 'md:text-gray-700  ' + `block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 `}>About</NavLink>
          <NavLink to="/category" className={( { isActive }: { isActive: boolean } ) => isActive ? 'md:text-cyan-700' : 'md:text-gray-700  ' + `block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 `}>Category</NavLink>
          <NavLink to="/product" className={( { isActive }: { isActive: boolean } ) => isActive ? 'md:text-cyan-700' : 'md:text-gray-700  ' + `block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 `}>Product</NavLink>
          <NavLink to="/contact" className={( { isActive }: { isActive: boolean } ) => isActive ? 'md:text-cyan-700' : 'md:text-gray-700  ' + `block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 `}>Contact</NavLink>

        </Navbar.Collapse>
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>

      </Navbar>
    </>
  )
}
