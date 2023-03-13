import Friends from "../assets/icons/1.png";
import Groups from "../assets/icons/2.png";
import Market from "../assets/icons/3.png";
import Watch from "../assets/icons/4.png";
import Memories from "../assets/icons/5.png";
import Events from "../assets/icons/6.png";
import Gaming from "../assets/icons/7.png";
import Gallery from "../assets/icons/8.png";
import Videos from "../assets/icons/9.png";
import Messages from "../assets/icons/10.png";
import Tutorials from "../assets/icons/11.png";
import Courses from "../assets/icons/12.png";
import Fund from "../assets/icons/13.png";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Leftbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="  leftbar   sticky   h-[calc(100vh-30px)]   overflow-x-hidden   dark:bg-[#222]   dark:text-[#f5f5f5]">
      <div className="container p-5">
        <div className="menu flex flex-col gap-5">
          <div className="user flex items-center gap-3">
            <img
              src={currentUser.profilePic}
              alt=""
              className="w-[30px] h-[30px] rounded-[50%] object-cover"
            />
            <span className="text-lg">{currentUser.name}</span>
          </div>
          <div className="item flex items-center gap-3">
            <img src={Friends} alt="" className="w-[30px] h-[30px]" />
            <span className="text-lg">Friends</span>
          </div>
          <div className="item flex items-center gap-3">
            <img src={Groups} alt="" className="w-[30px] h-[30px]" />
            <span className="text-lg">Groups</span>
          </div>
          <div className="item flex items-center gap-3">
            <img src={Market} alt="" className="w-[30px] h-[30px]" />
            <span className="text-lg">Marketplace</span>
          </div>
          <div className="item flex items-center gap-3">
            <img src={Watch} alt="" className="w-[30px] h-[30px]" />
            <span className="text-lg">Watch</span>
          </div>
          <div className="item flex items-center gap-3">
            <img src={Memories} alt="" className="w-[30px] h-[30px]" />
            <span className="text-lg">Memories</span>
          </div>
        </div>
        <hr className="mx-0 my-[20px] border-none h-[0.5px] bg-[#d3d3d3] dark:bg-[#444]" />
        <div className="menu flex flex-col gap-5">
          <span className="text-xs">Your shortcuts</span>
          <div className="item flex items-center gap-3">
            <img src={Events} alt="" className="w-[30px] h-[30px]" />
            <span className="text-lg">Events</span>
          </div>
          <div className="item flex items-center gap-3">
            <img src={Gaming} alt="" className="w-[30px] h-[30px]" />
            <span className="text-lg">Gaming</span>
          </div>
          <div className="item flex items-center gap-3">
            <img src={Gallery} alt="" className="w-[30px] h-[30px]" />
            <span className="text-lg">Gallery</span>
          </div>
          <div className="item flex items-center gap-3">
            <img src={Videos} alt="" className="w-[30px] h-[30px]" />
            <span className="text-lg">Videos</span>
          </div>
          <div className="item flex items-center gap-3">
            <img src={Messages} alt="" className="w-[30px] h-[30px]" />
            <span className="text-lg">Messages</span>
          </div>
        </div>
        <hr className="mx-0 my-[20px] border-none h-[0.5px] bg-[#d3d3d3] dark:bg-[#444]" />
        <div className="menu flex flex-col gap-5">
          <span className="text-xs">Others</span>
          <div className="item flex items-center gap-3">
            <img src={Fund} alt="" className="w-[30px] h-[30px]" />
            <span className="text-lg">Fundraiser</span>
          </div>
          <div className="item flex items-center gap-3">
            <img src={Tutorials} alt="" className="w-[30px] h-[30px]" />
            <span className="text-lg">Tutorials</span>
          </div>
          <div className="item flex items-center gap-3">
            <img src={Courses} alt="" className="w-[30px] h-[30px]" />
            <span className="text-lg">Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
