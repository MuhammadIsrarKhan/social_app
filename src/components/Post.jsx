import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "./Comments";

const Post = ({ post }) => {
  const liked = true;
  const [commentOpen, setCommentOpen] = useState(false);
  return (
    <div
      className="post rounded-[20px] bg-white dark:bg-[#333] text-[#000] dark:text-[#f5f5f5]"
      style={{ boxShadow: "0px 0px 25px -10px rgba(0, 0, 0, 0.38)" }}
    >
      <div className="container p-5">
        <div className="user flex items-center justify-between">
          <div className="userInfo flex gap-5">
            <img
              src={post.profilePic}
              alt=""
              className="w-[40px] h-[40px] rounded-[50%]
            object-cover "
            />
            <div className="details flex flex-col">
              <Link to={`/profile/${post.userId}`}>
                <span className="font-medium">{post.name}</span>
              </Link>
              <span className="text-[12px]">1 minute ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content my-[20px] mx-0">
          <p>{post.desc}</p>
          <img
            src={post.profilePic}
            alt=""
            className="w-full max-h-[500px] object-cover mt-[20px]"
          />
        </div>
        <div className="info flex items-center gap-5">
          <div className="item flex items-center gap-2 cursor-pointer text-[14px] ">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div
            onClick={() => setCommentOpen(!commentOpen)}
            className="item flex items-center gap-2 cursor-pointer text-[14px]"
          >
            <TextsmsOutlinedIcon />
            12 Likes
          </div>
          <div className="item flex items-center gap-2 cursor-pointer text-[14px]">
            <ShareOutlinedIcon />
            12 Likes
          </div>
        </div>
        {commentOpen ? <Comments /> : null}
      </div>
    </div>
  );
};

export default Post;
