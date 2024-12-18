import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  // Common navigation links
  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: <AiOutlineHome size={20} />,
    },
    {
      name: "Services",
      path: "/services",
      icon: <RiServiceLine size={20} />,
    },
    {
      name: "Contact Us",
      path: "/contact-us",
      icon: <RiCustomerService2Fill size={20} />,
    },
  ];

  return (
    <nav className="bg-white w-full fixed top-0 left-0 z-50 overflow-hidden">
      <div className="w-[90%] lg:w-[95%] flex items-center justify-between h-[60px] mx-auto">
        {/* Logo */}
        <div className="flex items-center lg:gap-10">
          <h1 className="tracking-wide text-xs lg:text-base font-bold uppercase">
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
        <div className="hidden lg:flex items-center gap-6">
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
        className={`fixed top-[60px] right-0 w-full h-[40vh] bg-black/50 transform ${
          menu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="w-full bg-yellow-50 h-full p-6 shadow-lg">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenu(false)}
                  className={({ isActive }) =>
                    `font-medium flex items-center gap-2 hover:text-yellow-500 transition-all ${
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

          {/* Shop Button below Navigation with icon */}
          <div className="mt-6">
            <NavLink to="/shop" onClick={() => setMenu(false)}>
              <button className="w-full py-3 bg-yellow-500 text-white font-medium flex items-center justify-center gap-2 rounded-md hover:bg-yellow-400 transition-all">
                <FaShop size={20} />
                Shop
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
