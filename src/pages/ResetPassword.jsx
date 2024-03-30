import React from "react";

const ResetPassword = () => {
  return (
    <div className=" font2 bg-gray-50 w-full min-h-screen flex justify-center items-center">
      <p className=" fixed top-2 left-2">logo</p>
      <div className=" w-[90%] lg:w-[40%] bg-white shadow-md p-4 lg:p-8 rounded-md ">
        <h2 className=" text-xl lg:text-3xl font-bold text-center">
          Reset Password
        </h2>
        <p className=" font2 text-gray-500 text-sm text-center">
          Reset your password. Go ahead and set a new password
        </p>
        <div className=" w-full flex flex-col gap-2 mt-6">
          <label
            className=" tracking-wide capitalize text-xs lg:text-sm font-semibold "
            htmlFor="password"
          >
            New Password
          </label>
          <div className="w-full flex justify-center items-center border-2 hover:border-[#FCB59A] border-[#D0D5DD] p-3.5  rounded-md">
            <input
              className=" w-full h-full  border outline-none border-none  placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
              placeholder="Enter your new password"
              type="password"
              name="password"
              id="password"
            />
          </div>
        </div>
        <div className=" w-full flex flex-col gap-2 mt-6">
          <label
            className=" tracking-wide capitalize text-xs lg:text-sm font-semibold "
            htmlFor="password"
          >
            Confirm Password
          </label>
          <div className="w-full flex justify-center items-center border-2 hover:border-[#FCB59A] border-[#D0D5DD] p-3.5  rounded-md">
            <input
              className=" w-full h-full  border outline-none border-none  placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
              placeholder="Confirm your new password"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button className=" bg-black w-full rounded-md text-white font-semibold hover:bg-gray-300 text-center p-3.5 mt-8">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
