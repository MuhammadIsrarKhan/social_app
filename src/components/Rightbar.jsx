const Rightbar = () => {
  return (
    <div className="rightbar  sticky  h-[calc(100vh-30px)]  overflow-x-hidden  dark:bg-[#333]  dark:text-[#f5f5f5]">
      <div className="container p-5">
        <div
          className="item dark:bg-[#222] mb-5 p-5"
          style={{ boxShadow: "0px 0px 15px 1px rgba(0, 0, 0, 0.09)" }}
        >
          <span className="text-gray-500">Suggestions For You</span>
          <div className="user flex items-center justify-between mx-0 my-[20px]">
            <div className="userInfo flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <span className="font-medium text-black dark:text-[#f5f5f5]">
                Jane Doe
              </span>
            </div>
            <div className="buttons flex items-center gap-2">
              <button className="border-none p-1 text-white cursor-pointer bg-[#5271ff]">
                follow
              </button>
              <button className="border-none p-1 text-white cursor-pointer bg-[#f0544f]">
                dilgiss
              </button>
            </div>
          </div>
          <div className="user flex items-center justify-between mx-0 my-[20px]">
            <div className="userInfo flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <span className="font-medium text-black dark:text-[#f5f5f5]">
                Jane Doe
              </span>
            </div>
            <div className="buttons flex items-center gap-2">
              <button className="border-none p-1 text-white cursor-pointer bg-[#5271ff]">
                follow
              </button>
              <button className="border-none p-1 text-white cursor-pointer bg-[#f0544f]">
                dilgiss
              </button>
            </div>
          </div>
        </div>
        <div
          className="item dark:bg-[#222] mb-5 p-5"
          style={{ boxShadow: "0px 0px 15px 1px rgba(0, 0, 0, 0.09)" }}
        >
          <span className="text-gray-500">Latest Activities</span>
          <div className="user flex items-center justify-between mx-0 my-[20px]">
            <div className="userInfo flex items-center">
              <div className="w-[50%]">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="w-[40px] h-[40px] rounded-[50%]"
                />
              </div>
              <p className="text-gray-500 box-border dark:text-[#d3d3d3]">
                <span className="font-medium text-black dark:text-[#f5f5f5]">
                  Jane Doe
                </span>{" "}
                changed their cover picture
              </p>
            </div>
            <span className="text-gray-500">1 min ago</span>
          </div>
          <div className="user flex items-center justify-between mx-0 my-[20px]">
            <div className="userInfo flex items-center">
              <div className="w-[50%]">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="w-[40px] h-[40px] rounded-[50%]"
                />
              </div>
              <p className="text-gray-500 box-border dark:text-[#d3d3d3]">
                <span className="font-medium text-black dark:text-[#f5f5f5] ">
                  Jane Doe
                </span>{" "}
                changed their cover picture
              </p>
            </div>
            <span className="text-gray-500">1 min ago</span>
          </div>
          <div className="user flex items-center justify-between mx-0 my-[20px]">
            <div className="userInfo flex items-center">
              <div className="w-[50%]">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="w-[40px] h-[40px] rounded-[50%]"
                />
              </div>
              <p className="text-gray-500 box-border dark:text-[#d3d3d3]">
                <span className="font-medium text-black dark:text-[#f5f5f5] ">
                  Jane Doe
                </span>{" "}
                changed their cover picture
              </p>
            </div>
            <span className="text-gray-500">1 min ago</span>
          </div>
          <div className="user flex items-center justify-between mx-0 my-[20px]">
            <div className="userInfo flex items-center">
              <div className="w-[50%]">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="w-[40px] h-[40px] rounded-[50%]"
                />
              </div>
              <p className="text-gray-500 box-border dark:text-[#d3d3d3]">
                <span className="font-medium text-black dark:text-[#f5f5f5] ">
                  Jane Doe
                </span>{" "}
                changed their cover picture
              </p>
            </div>
            <span className="text-gray-500">1 min ago</span>
          </div>
        </div>
        <div
          className="item dark:bg-[#222] mb-5 p-5 -z-10"
          style={{ boxShadow: "0px 0px 15px 1px rgba(0, 0, 0, 0.09)" }}
        >
          <span>Online Friends</span>
          <div className="user flex items-center justify-between mx-0 my-[20px]">
            <div className="userInfo relative flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <div className="online w-[12px] h-[12px] rounded-[50%] bg-[#32cd32] absolute top-0 left-[30px]" />
              <span className="font-medium text-black dark:text-[#f5f5f5] ">
                Jane Doe
              </span>
            </div>
          </div>
          <div className="user flex items-center justify-between mx-0 my-[20px]">
            <div className="userInfo relative flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <div className="online w-[12px] h-[12px] rounded-[50%] bg-[#32cd32] absolute top-0 left-[30px]" />
              <span className="font-medium text-black dark:text-[#f5f5f5] ">
                Jane Doe
              </span>
            </div>
          </div>
          <div className="user flex items-center justify-between mx-0 my-[20px]">
            <div className="userInfo relative flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <div className="online w-[12px] h-[12px] rounded-[50%] bg-[#32cd32] absolute top-0 left-[30px]" />
              <span className="font-medium text-black dark:text-[#f5f5f5] ">
                Jane Doe
              </span>
            </div>
          </div>
          <div className="user flex items-center justify-between mx-0 my-[20px]">
            <div className="userInfo relative flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <div className="online w-[12px] h-[12px] rounded-[50%] bg-[#32cd32] absolute top-0 left-[30px]" />
              <span className="font-medium text-black dark:text-[#f5f5f5]">
                Jane Doe
              </span>
            </div>
          </div>
          <div className="user flex items-center justify-between mx-0 my-[20px]">
            <div className="userInfo relative flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <div className="online w-[12px] h-[12px] rounded-[50%] bg-[#32cd32] absolute top-0 left-[30px]" />
              <span className="font-medium text-black dark:text-[#f5f5f5]">
                Jane Doe
              </span>
            </div>
          </div>
          <div className="user flex items-center justify-between mx-0 my-[20px]">
            <div className="userInfo relative flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <div className="online w-[12px] h-[12px] rounded-[50%] bg-[#32cd32] absolute top-0 left-[30px]" />
              <span className="font-medium text-black dark:text-[#f5f5f5]">
                Jane Doe
              </span>
            </div>
          </div>
          <div className="user flex items-center justify-between mx-0 my-[20px]">
            <div className="userInfo relative flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <div className="online w-[12px] h-[12px] rounded-[50%] bg-[#32cd32] absolute top-0 left-[30px]" />
              <span className="font-medium text-black dark:text-[#f5f5f5]">
                Jane Doe
              </span>
            </div>
          </div>
          <div className="user flex items-center justify-between mx-0 my-[20px]">
            <div className="userInfo relative flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <div className="online w-[12px] h-[12px] rounded-[50%] bg-[#32cd32] absolute top-0 left-[30px]" />
              <span className="font-medium text-black dark:text-[#f5f5f5]">
                Jane Doe
              </span>
            </div>
          </div>
          <div className="user flex items-center justify-between mx-0 my-[20px]">
            <div className="userInfo relative flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <div className="online w-[12px] h-[12px] rounded-[50%] bg-[#32cd32] absolute top-0 left-[30px]" />
              <span className="font-medium text-black dark:text-[#f5f5f5]">
                Jane Doe
              </span>
            </div>
          </div>
          <div className="user flex items-center justify-between mx-0 my-[20px]">
            <div className="userInfo relative flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <div className="online w-[12px] h-[12px] rounded-[50%] bg-[#32cd32] absolute top-0 left-[30px]" />
              <span className="font-medium text-black dark:text-[#f5f5f5]">
                Jane Doe
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
