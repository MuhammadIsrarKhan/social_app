import Image from "../assets/icons/img.png";
import Map from "../assets/icons/map.png";
import Friend from "../assets/icons/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useMutation, useQueryClient } from "react-query";
import { makeReqest } from "../axios";

const Share = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeReqest.post("/upload", formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => {
      return makeReqest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ desc, img: imgUrl });
    setDesc("");
    setFile(null);
  };
  return (
    <div
      className="share rounded-[20px] bg-white dark:bg-[#222] text-[#000] dark:text-[#f5f5f5] mb-[20px]"
      style={{ boxShadow: " 0px 0px 25px -10px rgba(0, 0, 0, 0.38)" }}
    >
      <div className="container p-5">
        <div className="top flex items-center justify-between">
          <div className="left flex items-center">
            <div className="w-full">
              <img
                src={currentUser.profilePic}
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder={`What's on your mind ${currentUser.name}?`}
                className="outline-none my-5 bg-transparent w-[250px] mx-2 text-[#000] dark:text-[#f5f5f5]"
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
              />
            </div>
          </div>
          <div className="right w-[100px]">
            {file && (
              <img
                className="file w-[100px] h-[100px] object-cover rounded-[0px]"
                src={URL.createObjectURL(file)}
                alt=""
              />
            )}
          </div>
        </div>
        <hr className="my-5 border-none h-[0.5px] bg-[#d3d3d3] dark:bg-[#444]" />
        <div className="bottom flex items-center justify-between">
          <div className="left flex items-center gap-5">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item flex items-center gap-[10px] cursor-pointer">
                <img src={Image} alt="" className="h-[20px]" />
                <span style={{ fontSize: "12px", color: "gray" }}>
                  Add Image
                </span>
              </div>
            </label>
            <div className="item flex items-center gap-[10px] cursor-pointer">
              <img src={Map} alt="" className="h-[20px]" />
              <span style={{ fontSize: "12px", color: "gray" }}>Add Place</span>
            </div>
            <div className="item flex items-center gap-[10px] cursor-pointer">
              <img src={Friend} alt="" className="h-[20px]" />
              <span style={{ fontSize: "12px", color: "gray" }}>
                Tag Friends
              </span>
            </div>
          </div>
          <div className="right border-none p-[5px] text-white cursor-pointer bg-[#5271ff] rounded-[3px]">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
