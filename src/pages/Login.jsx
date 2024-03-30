import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" font2 w-full bg-gray-50 flex flex-row-reverse min-h-screen">
      <div className="hidden lg:block lg:w-[50%] m-3 rounded-md  bg-red-300"></div>
      <div className=" w-full lg:w-[50%]   flex flex-col justify-center items-center">
        <form>
          logo
          <h2 className=" text-xl lg:text-3xl font-bold">Welcome back,Login</h2>
          <p className=" font2 text-gray-500 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            veritatis vel odit!
          </p>
          <button className=" bg-gray-900 w-full rounded-md flex items-center gap-7 justify-center text-white   shadow-sm font-semibold hover:scale-105 hover:bg-gray-300 text-center p-3.5 my-6">
            <FcGoogle size={20} /> Continue with Google
          </button>
          <p className=" text-center w-full text-gray-500 text-sm">OR</p>
          <div className=" flex flex-col gap-2 mt-2">
            <label
              className=" tracking-wide capitalize text-xs lg:text-sm font-semibold "
              htmlFor="email"
            >
              email
            </label>
            <div className=" bg-white w-full flex justify-center items-center border-2 hover:border-[#FCB59A] border-[#D0D5DD] p-3.5  rounded-md">
              <input
                className=" w-full h-full  border outline-none border-none  placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
                placeholder="Enter your work email address"
                type="email"
                name="email"
                id="email"
              />
            </div>
          </div>
          <div className=" flex flex-col gap-2 mt-6">
            <label
              className=" tracking-wide capitalize text-xs lg:text-sm font-semibold "
              htmlFor="password"
            >
              Password
            </label>
            <div className=" bg-white w-full flex justify-center items-center border-2 hover:border-[#FCB59A] border-[#D0D5DD] p-3.5  rounded-md">
              <input
                className=" w-full h-full  border outline-none border-none  placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
                placeholder="Enter your password"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </div>
          <Link to={"/forgot-password"}>
            <p className=" mt-2 text-sm w-full text-right font-semibold">
              Forgot Password
            </p>
          </Link>
          <button className=" bg-black w-full rounded-md text-white font-semibold hover:bg-gray-300 text-center p-3.5 mt-8">
            Sign In
          </button>
          <Link to={"/register"}>
            <p className=" text-sm text-center mt-6">
              Don't have an account?{" "}
              <span className=" font-medium"> Create Account</span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
