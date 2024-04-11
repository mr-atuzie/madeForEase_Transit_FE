import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className=" z-40 absolute top-0  w-full font2 flex items-center h-[60px]">
      <div className=" w-[90%]  flex items-center justify-between mx-auto">
        <div className=" flex items-center gap-10">
          <h1 className=" text-white text-3xl font-bold">Logo</h1>

          <ul className="   hidden lg:flex gap-6 items-center">
            <li className=" font-semibold">Fund wallet</li>
            <li className=" font-semibold">Withdrawal</li>
            <li className=" font-semibold">Invest</li>
            <li className=" font-semibold">Invest History</li>
            <li className=" font-semibold">Transactions</li>
            <li className=" font-semibold">Referral</li>
            <li className=" font-semibold">My account</li>
          </ul>
        </div>

        <div className="  hidden lg:flex  items-center gap-6">
          <Link to={"/login"}>
            <button className=" border-2 font-medium border-black rounded-md px-4 py-2">
              Log in
            </button>
          </Link>

          <Link to={"/register"}>
            <button className=" font-medium bg-black text-white rounded-md px-4 py-2">
              Register
            </button>
          </Link>
        </div>

        <button
          onClick={() => setMenu(!menu)}
          className=" text-gray-50 lg:hidden "
        >
          {menu ? <MdOutlineClose size={25} /> : <RxHamburgerMenu size={25} />}
        </button>
      </div>
      {menu && (
        <div className=" h-screen fixed left-0 bg-gray-50 top-0 z-50  w-[70%]">
          sidebar
        </div>
      )}
    </nav>
  );
};

export default Navbar;
