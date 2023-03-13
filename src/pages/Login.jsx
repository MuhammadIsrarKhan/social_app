import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
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
        <form className="flex flex-col gap-8" onSubmit={submitHandler}>
          <h1 className="text-3xl font-semibold">Login</h1>
          <input
            type="text"
            className="border-b-[1px] border-solid border-b-[#d3d3d3] pb-2 focus:outline-none"
            placeholder="username"
            name="username"
            onChange={handleChange}
          />
          <input
            type="password"
            className="border-b-[1px] border-solid border-b-[#d3d3d3] pb-2 focus:outline-none"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          {err && err}
          <button
            type="submit"
            className="font-bold w-[60%] bg-[#938eef] text-white p-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
