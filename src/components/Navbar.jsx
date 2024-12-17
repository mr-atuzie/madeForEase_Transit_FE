import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="bg-white shadow-lg w-full  flex items-center left-0 h-[60px] fixed top-0 z-50">
      <div className="w-[90%] lg:w-[95%] flex items-center justify-between mx-auto">
        <div className="flex items-center lg:gap-10">
          <h1 className="tracking-wide text-xs lg:text-sm font-bold text-yellow-600 uppercase">
            Made For Ease Transit
          </h1>

          <ul className="hidden lg:flex gap-6 items-center">
            <li>
              <NavLink
                to="/fund-wallet"
                className="font-medium text-gray-700 hover:text-yellow-500 transition-all"
                activeClassName="text-yellow-500 font-bold"
              >
                Fund wallet
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/withdrawal"
                className="font-medium text-gray-700 hover:text-yellow-500 transition-all"
                activeClassName="text-yellow-500 font-bold"
              >
                Withdrawal
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/invest"
                className="font-medium text-gray-700 hover:text-yellow-500 transition-all"
                activeClassName="text-yellow-500 font-bold"
              >
                Invest
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/invest-history"
                className="font-medium text-gray-700 hover:text-yellow-500 transition-all"
                activeClassName="text-yellow-500 font-bold"
              >
                Invest History
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/transactions"
                className="font-medium text-gray-700 hover:text-yellow-500 transition-all"
                activeClassName="text-yellow-500 font-bold"
              >
                Transactions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/referral"
                className="font-medium text-gray-700 hover:text-yellow-500 transition-all"
                activeClassName="text-yellow-500 font-bold"
              >
                Referral
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-account"
                className="font-medium text-gray-700 hover:text-yellow-500 transition-all"
                activeClassName="text-yellow-500 font-bold"
              >
                My account
              </NavLink>
            </li>
          </ul>
        </div>

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

        {/* Hamburger Button */}
        <button onClick={() => setMenu(!menu)} className="lg:hidden z-50">
          {menu ? <MdOutlineClose size={25} /> : <RxHamburgerMenu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="fixed z-50 top-0 right-0 bg-black/50 w-full h-screen">
          <div className="menu-container w-[60vw] bg-white h-full p-6">
            <ul className="flex flex-col gap-4">
              <li>
                <NavLink
                  to="/fund-wallet"
                  className="font-medium text-gray-700 hover:text-yellow-500 transition-all"
                  activeClassName="text-yellow-500 font-bold"
                >
                  Fund wallet
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/withdrawal"
                  className="font-medium text-gray-700 hover:text-yellow-500 transition-all"
                  activeClassName="text-yellow-500 font-bold"
                >
                  Withdrawal
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/invest"
                  className="font-medium text-gray-700 hover:text-yellow-500 transition-all"
                  activeClassName="text-yellow-500 font-bold"
                >
                  Invest
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/invest-history"
                  className="font-medium text-gray-700 hover:text-yellow-500 transition-all"
                  activeClassName="text-yellow-500 font-bold"
                >
                  Invest History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/transactions"
                  className="font-medium text-gray-700 hover:text-yellow-500 transition-all"
                  activeClassName="text-yellow-500 font-bold"
                >
                  Transactions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/referral"
                  className="font-medium text-gray-700 hover:text-yellow-500 transition-all"
                  activeClassName="text-yellow-500 font-bold"
                >
                  Referral
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-account"
                  className="font-medium text-gray-700 hover:text-yellow-500 transition-all"
                  activeClassName="text-yellow-500 font-bold"
                >
                  My account
                </NavLink>
              </li>
              <li>
                <NavLink to="/login">
                  <button className="w-full text-center bg-gray-200 rounded-md py-2 hover:bg-gray-300 transition-all">
                    Log in
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/register">
                  <button className="w-full text-center bg-black text-white rounded-md py-2 hover:bg-gray-800 transition-all">
                    Register
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
