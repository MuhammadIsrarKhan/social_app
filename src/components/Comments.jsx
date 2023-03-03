import React, { useContext } from "react";
import { AuthContext } from "./context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className="comments ">
      <div className="write flex items-center justify-between gap-[20px] mx-0 my-5">
        <img
          src={currentUser.profilePic}
          alt=""
          className="w-[40px] h-[40px] rounded-[50%] object-cover"
        />
        <input
          type="text"
          placeholder="write a comment"
          className="w-full border-solid border-[#d3d3d3] border-[1px] bg-transparent text-[#000] focus:outline-none dark:text-[#f5f5f5]"
          style={{ flex: "5" }}
        />
        <button className=" border-none bg-[#5271ff] text-white p-[2px] cursor-pointer rounded-[3px]">
          Send
        </button>
      </div>
      {comments.map((comment) => (
        <div className="comment my-[30px] flex justify-between gap-[20px]">
          <img
            src={comment.profilePicture}
            alt=""
            className="w-[40px] h-[40px] rounded-[50%] object-cover self-center"
          />
          <div
            className="info flex flex-col gap-[3px] content-start"
            style={{ flex: "5" }}
          >
            <span className="font-medium">{comment.name}</span>
            <p className="text-[#555] dark:text-[#d3d3d3]">{comment.desc}</p>
          </div>
          <span className="date font-medium flex-1 self-center text-[#808080] text-xs">
            1 hour ago
          </span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
