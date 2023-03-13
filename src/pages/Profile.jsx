import React, { useContext } from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../components/Posts";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { makeReqest } from "../axios";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { data } = useQuery(["user"], async () => {
    const posts = await makeReqest.get("/users/find/" + userId);
    return posts.data;
  });
  const { data: relationshipData } = useQuery(["relationship"], async () => {
    const posts = await makeReqest.get(
      "/relationships?followedUserId=" + userId
    );
    return posts.data;
  });

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (following) => {
      if (following)
        return makeReqest.delete("/relationships?userId=" + userId);
      return makeReqest.post("/relationships", { userId });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["relationship"]);
      },
    }
  );
  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id));
    console.log(relationshipData.includes(currentUser.id));
  };
  // console.log(relationshipData);
  return (
    <div className="profile overflow-scroll h-[calc(100vh-30px)] sticky dark:bg-[#333] py-[20px] dark:text-[#f5f5f5]">
      <div className="images w-full h-[300px] relative">
        <img
          src={data?.coverPic}
          alt=""
          className="cover w-full h-full object-cover"
        />
        <img
          src={data?.profilePic}
          alt=""
          className="profilePic rounded-[50%] w-[200px] h-[200px] object-cover absolute left-0 top-0 right-0 m-auto mt-[200px]"
        />
      </div>
      <div className="profileContainer px-[40px] py-[20px] text-lg">
        <div
          className="uInfo lg:h-[220px] lg:rounded-[20px] lg:bg-white lg:dark:bg-[#222] lg:p-[30px] lg:flex lg:flex-row lg:items-center lg:justify-between lg:mb-5 flex flex-col justify-between items-center mt-20 lg:mt-0 gap-5 py-2"
          style={{ boxShadow: "0px 0px 25px -10px rgba(0, 0, 0, 0.38)" }}
        >
          <div className="left flex-1 flex gap-2">
            <a
              className="text-[#555] dark:text-[#d3d3d3]"
              href="http://facebook.com"
            >
              <FacebookTwoToneIcon fontSize="lgall" />
            </a>
            <a
              className="text-[#555] dark:text-[#d3d3d3]"
              href="http://facebook.com"
            >
              <InstagramIcon fontSize="lgall" />
            </a>
            <a
              className="text-[#555] dark:text-[#d3d3d3]"
              href="http://facebook.com"
            >
              <TwitterIcon fontSize="lgall" />
            </a>
            <a
              className="text-[#555] dark:text-[#d3d3d3]"
              href="http://facebook.com"
            >
              <LinkedInIcon fontSize="lgall" />
            </a>
            <a
              className="text-[#555] dark:text-[#d3d3d3]"
              href="http://facebook.com"
            >
              <PinterestIcon fontSize="lgall" />
            </a>
          </div>
          <div className="center flex-1 flex flex-col gap-2 justify-center items-center lg:mt-16">
            <span className="font-bold text-2xl mt-3  ">{data?.name}</span>
            <div className="info flex gap-2">
              <div className="item flex gap-1">
                <PlaceIcon className="text-[#555] dark:text-[#d3d3d3]" />
                <span>{data?.city}</span>
              </div>
              <div className="item flex gap-1">
                <LanguageIcon className="text-[#555] dark:text-[#d3d3d3]" />
                <span>{data?.website}</span>
              </div>
            </div>
            {userId === currentUser.id ? (
              <button className="border-none bg-[#5271ff] text-white px-[20px] py-[10px] rounded-[5px] cursor-pointer">
                update
              </button>
            ) : (
              <button
                className="border-none bg-[#5271ff] text-white px-[20px] py-[10px] rounded-[5px] cursor-pointer"
                onClick={handleFollow}
              >
                {relationshipData?.includes(currentUser.id)
                  ? "Following"
                  : "Follow"}
              </button>
            )}
          </div>
          <div className="right flex-1 flex items-center justify-end gap-2">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts userId={userId} />
      </div>
    </div>
  );
};

export default Profile;
