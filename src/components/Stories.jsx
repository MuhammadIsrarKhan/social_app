import React, { useContext } from "react";
import { AuthContext } from "./context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  return (
    <div className="flex gap-3 h-[200px] mb-7">
      <div className="flex flex-1 rounded-[10px] overflow-hidden relative">
        <img src={currentUser.profilePic} alt="" className="w-full h-full" />
        <span className="absolute bottom-2 left-3 font-medium text-white">
          {currentUser.name}
        </span>
        <button className="absolute bottom-10 left-3 text-white bg-[#5271ff] border-none rounded-[50%] w-[30px] h-[30px] cursor-pointer text-[30px] flex justify-center items-center">
          <span className="-translate-y-[2px]">+</span>
        </button>
      </div>
      {stories.map((story) => (
        <div
          key={story.id}
          className="flex flex-1 rounded-[10px] overflow-hidden relative"
        >
          <img src={story.img} alt="" className="w-full h-full" />
          <span className="absolute bottom-2 left-3 font-medium text-white">
            {story.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
