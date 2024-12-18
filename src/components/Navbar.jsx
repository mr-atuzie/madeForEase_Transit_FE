import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="bg-white  w-full fixed top-0 left-0 z-50 overflow-hidden">
      <div className="w-[90%] lg:w-[95%] flex items-center justify-between h-[60px] mx-auto">
        {/* Logo */}
        <div className="flex items-center lg:gap-10">
          <h1 className="tracking-wide text-xs lg:text-base font-bold  uppercase">
            Made For Ease Transit
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-6 items-center">
          {[
            "Features",
            "Services",
            "Contact Us",
            "Invest History",
            "Transactions",
            "Referral",
            "My account",
          ].map((item, index) => (
            <li key={index}>
              <NavLink
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className={({ isActive }) =>
                  `font-medium text-gray-700 hover:text-yellow-500 transition-all ${
                    isActive ? "text-yellow-500 font-bold" : ""
                  }`
                }
              >
                {item}
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
        <div className="w-full bg-white h-full p-6 shadow-lg">
          <ul className="flex flex-col gap-6">
            {["Features", "Services", "Contact Us"].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setMenu(false)}
                  className={({ isActive }) =>
                    `font-medium text-gray-700 hover:text-yellow-500 transition-all ${
                      isActive ? "text-yellow-500 font-bold" : ""
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/login">
                <button
                  onClick={() => setMenu(false)}
                  className="w-full bg-gray-200 rounded-md py-2 hover:bg-gray-300 transition-all"
                >
                  Go to shop
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/register">
                <button
                  onClick={() => setMenu(false)}
                  className="w-full bg-black text-white rounded-md py-2 hover:bg-gray-800 transition-all"
                >
                  Register
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
