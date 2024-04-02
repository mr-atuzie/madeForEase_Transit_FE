import React from "react";

const Navbar = () => {
  return (
    <nav className=" font2 flex items-center h-[60px]">
      <div className=" w-[90%]  flex items-center justify-between mx-auto">
        <div className=" flex items-center gap-10">
          <h1 className=" text-3xl font-semibold">Logo</h1>

          <ul className="  hidden lg:flex gap-6 items-center">
            <li className=" font-semibold">Fund wallet</li>
            <li className=" font-semibold">Withdrawal</li>
            <li className=" font-semibold">Invest</li>
            <li className=" font-semibold">Invest History</li>
            <li className=" font-semibold">Transactions</li>
            <li className=" font-semibold">Referral</li>
            <li className=" font-semibold">My account</li>
          </ul>
        </div>

        <div className=" flex items-center gap-6">
          <button className=" border-2 font-medium border-black rounded-md px-4 py-2">
            Log in
          </button>

          <button className=" font-medium bg-black text-white rounded-md px-4 py-2">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
