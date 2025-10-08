import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Logoimg from "../assets/logo.png"

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Apps</Link>
              </li>
              <li>
                <Link>Installation</Link>
              </li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-xl font-bold leading-[26px] capitalize text-left font-inter 
               bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"><img className="w-10" src={Logoimg}></img>APP MART</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a>Home</a>
            </li>
            <li>
              <Link>Apps</Link>
            </li>
            <li>
              <Link>Installation</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn rounded-md bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white"><FaGithub />Contribute</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
