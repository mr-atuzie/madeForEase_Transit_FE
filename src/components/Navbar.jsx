import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdRoomService } from "react-icons/md";
import logo from "../assets/logo.webp";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  // Common navigation links
  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome size={20} />,
    },
    {
      name: "Services",
      path: "/services",
      icon: <MdRoomService size={20} />,
    },
    {
      name: "Contact Us",
      path: "/contact-us",
      icon: <RiCustomerService2Fill size={20} />,
    },
    {
      name: "Shop with ease",
      path: "/shop",
      icon: <BsCart4 size={20} />,
    },
  ];

  return (
    <nav className="bg-white w-full fixed top-0 left-0 z-50 overflow-hidden">
      <div className="w-[90%] lg:w-[95%] flex items-center justify-between h-[60px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 lg:gap-4">
          <img
            className=" w-8 h-8 rounded-lg object-contain"
            src={logo}
            alt=""
          />
          <h1 className="tracking-wide text-yellow-500 text-xs lg:text-base font-bold uppercase">
            Made For Ease Transit
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link, index) => (
            <li key={index} className="flex items-center gap-2">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-medium flex items-center gap-2 text-gray-700 hover:text-yellow-500 transition-all ${
                    isActive ? "text-yellow-500 font-bold" : ""
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-6">
          <NavLink to="/login">
            <button className="border-2 font-medium border-gray-700 rounded-md px-4 py-2 hover:bg-gray-100 transition-all">
              Log in
            </button>
          </NavLink>
          <NavLink to="/register">
            <button className="font-medium bg-black text-white rounded-md px-4 py-2 hover:bg-gray-800 transition-all">
              Register
            </button>
          </NavLink>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setMenu(!menu)}
          className="lg:hidden z-50 text-gray-800"
        >
          {menu ? <MdOutlineClose size={25} /> : <RxHamburgerMenu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[60px] right-0 w-full h-auto bg-black/50 transform ${
          menu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="w-full bg-yellow-50 p-6 shadow-lg rounded-b-md">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <li key={index} className="flex items-center">
                <NavLink
                  to={link.path}
                  onClick={() => setMenu(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 w-full text-gray-800 font-medium rounded-md py-2 text-sm transition-all ${
                      isActive
                        ? "bg-yellow-500 text-white shadow-md"
                        : "hover:text-yellow-500"
                    }`
                  }
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-yellow-500 rounded-md text-white">
                    {link.icon}
                  </div>
                  <span className="text-base font-medium md:text-lg">
                    {link.name}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
