import React, { useEffect, useState } from "react";
import { RiDashboardFill } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { FaMoneyCheck } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";

import axios from "axios";
const Dashboard = () => {
  const [user, setUser] = useState("");
  const [balance, setBalance] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        // console.log(response.data);
        setUser(response.data.firstName);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBalance(response.data.balance);
      });
  }, []);

  useEffect(()=> {
    axios.get("http://localhost:3000/api/v1/user/bulk")
    .then((response) => {
      
    })
  },[])

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Dashboard</a>
        </div>
        <div className="flex-none">
          Hello, {user}
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>

      </div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-[100%] flex items-center justify-center">
          <input type="text" placeholder="Search for Users" className="flex justify-center input input-bordered w-full max-w-xs" />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Your Balance</a>
            </li>
            <li>
              <a className=" text-3xl" >
              {balance}
              </a>
            </li>
          </ul>
        </div>
        <div className="w-[100%] flex items-center justify-center" >
        </div>
      </div>
    </>
  );
};

export default Dashboard;
