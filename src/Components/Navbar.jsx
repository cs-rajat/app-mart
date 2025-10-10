import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Logoimg from "../assets/logo.png";

const Navbar = () => {
  const activeClass =
    "text-white bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] rounded-md px-3 py-1 transition";
  const normalClass = "text-gray-700 hover:text-gray-900 px-3 py-1 transition";

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar  max-w-11/12 mx-auto">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/installed"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="/"
            className="flex items-center text-xl font-bold bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
          >
            <img className="w-10 mr-2" src={Logoimg} alt="APP MART Logo" />
            APP MART
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold space-x-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installed"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a
            href="https://github.com/cs-rajat"
            target="_blank"
            className="btn rounded-md bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white flex items-center gap-2"
          >
            <FaGithub />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
