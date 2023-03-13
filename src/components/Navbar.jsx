import React, { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { darkModeContext } from "../context/darkModeContext";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(darkModeContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="flex flex-row items-center justify-between px-5 py-2 h-12 border-[1px] border-r-0 border-solid border-[#d3d3d3] sticky top-0 bg-white dark:bg-[#222] dark:border-t-0 dark:border-r-0 dark:border-l-0 dark:border-b-[#444] dark:text-[#f5f5f5]">
      <div className="flex flex-row items-center gap-8">
        <Link to="/">
          <span className="font-bold text-xl text-blue-900 dark:text-white">
            socialo
          </span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon className="cursor-pointer" onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} className="cursor-pointer" />
        )}
        <GridViewOutlinedIcon />
        <div className="flex flex-row items-center gap-3 border-[1px] border-solid border-[#d3d3d3] rounded-md p-1 dark:border-[#444]">
          <SearchOutlinedIcon />
          <input
            type="text"
            placeholder="search..."
            className="lg:border-none lg:w-[500px] lg:focus:outline-none lg:dark:bg-transparent lg:block hidden sm:w-[400px] sm:block"
          />
        </div>
      </div>
      <div className="lg:flex lg:flex-row lg:items-center lg:gap-5 hidden">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="flex flex-row gap-2 font-medium">
          <img
            src={currentUser.profilePic}
            alt=""
            className="w-[30px] h-[30px] rounded-[50%] object-cover"
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
