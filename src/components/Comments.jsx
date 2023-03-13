import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { makeReqest } from "../axios";
import moment from "moment";

const Comments = ({ postId }) => {
  const { currentUser } = useContext(AuthContext);
  const [desc, setDesc] = useState("");
  const { isLoading, error, data } = useQuery(["comments"], async () => {
    const posts = await makeReqest.get("/comments?postId=" + postId);
    return posts.data;
  });

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
      return makeReqest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };
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
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button
          className=" border-none bg-[#5271ff] text-white p-[2px] cursor-pointer rounded-[3px]"
          onClick={handleClick}
        >
          Send
        </button>
      </div>
      {isLoading
        ? "Loading..."
        : data.map((comment) => (
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
                <p className="text-[#555] dark:text-[#d3d3d3]">
                  {comment.desc}
                </p>
              </div>
              <span className="date font-medium flex-1 self-center text-[#808080] text-xs">
                {moment(comment.createAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
