import React, { useContext, useState } from "react";
import moment from "moment";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { makeReqest } from "../axios";
import { AuthContext } from "../context/authContext";

const Post = ({ post }) => {
  // const liked = false;
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const { data } = useQuery(["likes", post.id], async () => {
    const posts = await makeReqest.get("/likes?postId=" + post.id);
    return posts.data;
  });

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (liked) => {
      if (liked) return makeReqest.delete("/likes?postId=" + post.id);
      return makeReqest.post("/likes", { postId: post.id });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["likes"]);
      },
    }
  );
  const deleteMutation = useMutation(
    (postId) => {
      return makeReqest.delete("/posts/" + postId);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );
  const handleClick = () => {
    mutation.mutate(data.includes(currentUser.id));
  };
  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };
  return (
    <div
      className="post rounded-[20px] bg-white dark:bg-[#333] text-[#000] dark:text-[#f5f5f5]"
      style={{ boxShadow: "0px 0px 25px -10px rgba(0, 0, 0, 0.38)" }}
    >
      <div className="container p-5">
        <div className="user flex items-center justify-between relative">
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
              <span className="text-[12px]">
                {moment(post.createAt).fromNow()}
              </span>
            </div>
          </div>
          <MoreHorizIcon
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
          {menuOpen && post.userId === currentUser.id && (
            <button
              onClick={handleDelete}
              className="absolute top-7 right-0 border-none bg-[#f0544f] p-[5px] cursor-pointer text-white"
            >
              delete
            </button>
          )}
        </div>
        <div className="content my-[20px] mx-0">
          <p>{post.desc}</p>
          <img
            src={`./upload/${post.img}`}
            alt=""
            className="w-full max-h-[500px] object-cover mt-[20px]"
          />
        </div>
        <div className="info flex items-center gap-5">
          <div className="item flex items-center gap-2 cursor-pointer text-[14px] ">
            {data?.includes(currentUser.id) ? (
              <FavoriteOutlinedIcon
                className="text-red-600"
                onClick={handleClick}
              />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={handleClick} />
            )}
            {data?.length} Likes
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
        {commentOpen ? <Comments postId={post.id} /> : null}
      </div>
    </div>
  );
};

export default Post;
