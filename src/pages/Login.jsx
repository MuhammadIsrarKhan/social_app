import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/context/authContext";

export const Login = () => {
  const { login } = useContext(AuthContext);
  const loginHandler = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <div className="bg-[rgb(193,190,255)] h-[100vh] w-[100vw] justify-center items-center flex">
      <div
        className="w-[25%] h-[60%] rounded-r-none rounded pl-8 pt-5 flex flex-col"
        style={{
          background:
            "linear-gradient(rgba(39,11,96,0.5),rgba(39,11,96,0.5)) ,url('https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrg&w=1600')",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-7xl font-bold text-white">Hello World.</h1>
        <p className="mt-8 text-white text-xs">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
          eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.
        </p>
        <p className="mt-10 text-white text-xs">Don't you have an account?</p>
        <Link
          to="/register"
          className="w-40 h-7 bg-white mt-4 font-semibold text-xs flex items-center justify-center"
        >
          Register
        </Link>
      </div>
      <div className="w-[25%] h-[60%] rounded-l-none rounded border bg-white flex flex-col p-9 pt-24">
        <form className="flex flex-col gap-8">
          <h1 className="text-3xl font-semibold">Login</h1>
          <input
            type="text"
            className="border-b-[1px] border-solid border-b-[#d3d3d3] pb-2 focus:outline-none"
            placeholder="username"
          />
          <input
            type="password"
            className="border-b-[1px] border-solid border-b-[#d3d3d3] pb-2 focus:outline-none"
            placeholder="password"
          />
          <button
            onClick={loginHandler}
            className="font-bold w-[60%] bg-[#938eef] text-white p-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
