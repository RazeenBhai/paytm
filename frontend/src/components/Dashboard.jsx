import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { FaMoneyCheck } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
const Dashboard = () => {
  return (
    <div className="bg-blue-600">
      <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <RiDashboardFill />
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              Dashboard
            </h1>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <IoHomeSharp />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <FaMoneyCheck />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Payments
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <TbLogout2 />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Logout
          </span>
        </div>
      </div>
      <div className="w-[calc(100%-300px)] fixed p-2 overflow-y-auto right-0 h-[100vh] bg-gray-200">
        <div className="p-2 h-[70px] bg-gray-300 right-0">
          <span className="  flex align-middle text-gray-900"> <RxAvatar /> Hello, Razeen</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
