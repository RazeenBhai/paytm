import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { passwordAtom, usernameAtom } from "../store";
import { useRecoilState } from "recoil";
import axios from "axios";
const Signin = () => {
  const [username, setUsername] = useRecoilState(usernameAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);

  const [Error, setError] = useState("");

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const json = JSON.stringify({
      username: username,
      password: password,
    });

    let response = await axios.post(
      "http://localhost:3000/api/v1/user/signin",
      json,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    if (response.status === 200) {
      localStorage.setItem("userId", response.data.userId);
      // Assuming the server responds with a token in the 'token' property of the response
      const tokenFromServer = response.data.token;

      // Store the token in localStorage
      localStorage.setItem("token", `Bearer ${tokenFromServer}`);

      navigateToDashboard();
    }

    if (response.data.status === 411) {
      setError("Invalid Username or Password");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Signin
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  value={username}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div
        role="alert"
        className="alert alert-error fixed top-[10%] left-[50%] translate-x-[-50%] translate-y-[-0%] w-96"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{Error}</span>
      </div>
    </section>
  );
};

export default Signin;
