import React from "react";
import Stories from "../components/Stories";
import Posts from "../components/Posts";

const Home = () => {
  return (
    <div className="overflow-scroll h-[calc(100vh-30px)] sticky dark:bg-[#333] lg:px-[70px] lg:py-[20px] dark:text-[#f5f5f5] p-[10px]">
      <Stories />
      <Posts />
    </div>
  );
};

export default Home;
