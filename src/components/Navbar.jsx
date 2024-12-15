import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="  bg-white  w-full font2 flex items-center h-[60px]">
      <div className=" w-[90%] lg:w-[95%]  flex items-center justify-between mx-auto">
        <div className=" flex items-center gap-10">
          <h1 className=" text-xs text-start uppercase  lg:text-sm font-bold">
            Made For Ease <br className=" lg:hidden" /> Transit
          </h1>

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

        <button onClick={() => setMenu(!menu)} className=" z-50   lg:hidden ">
          {menu ? <MdOutlineClose size={25} /> : <RxHamburgerMenu size={25} />}
        </button>
      </div>
      {menu && (
        <div className=" z-40 fixed lg:hidden top-0 right-0 bg-black/10  w-full h-screen">
          <div className=" w-[60vw] bg-white h-screen p-4">stuff</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
