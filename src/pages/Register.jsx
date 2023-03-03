import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="bg-[rgb(193,190,255)] h-[100vh] w-[100vw] justify-center items-center flex flex-row-reverse">
      <div
        className="w-[25%] h-[60%] rounded-l-none rounded pl-8 pt-5 flex flex-col"
        style={{
          background:
            "linear-gradient(rgba(39,11,96,0.5),rgba(39,11,96,0.5)) ,url('https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrg&w=1600')",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-7xl font-bold text-white">Socialo appo</h1>
        <p className="mt-8 text-white text-xs">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
          eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.
        </p>
        <p className="mt-10 text-white text-xs">Do you have an account?</p>
        <Link
          to="/login"
          className="w-40 h-7 bg-white mt-4 font-semibold text-xs cursor-pointer text-center flex justify-center items-center"
        >
          Login
        </Link>
      </div>
      <div className="w-[25%] h-[60%] rounded-r-none rounded border bg-white flex flex-col p-6">
        <form className="flex flex-col gap-7">
          <h1 className="text-3xl font-semibold">Register</h1>
          <input
            type="text"
            className="border-b-[1px] border-solid border-b-[#d3d3d3] pb-2 focus:outline-none"
            placeholder="username"
          />
          <input
            type="email"
            className="border-b-[1px] border-solid border-b-[#d3d3d3] pb-2 focus:outline-none"
            placeholder="Email"
          />
          <input
            type="password"
            className="border-b-[1px] border-solid border-b-[#d3d3d3] pb-2 focus:outline-none"
            placeholder="password"
          />
          <input
            type="text"
            className="border-b-[1px] border-solid border-b-[#d3d3d3] pb-2 focus:outline-none"
            placeholder="Name"
          />
          <button className="font-bold w-[60%] bg-[#938eef] text-white p-2">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
