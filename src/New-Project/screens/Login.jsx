import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Icons from "react-bootstrap-icons";
import makeRequest from "../utils/makeRequest";
import Toast from "../utils/Alert";
import axios from "../utils/axios";
import { getUser } from "../State/authSlice";
import { useDispatch } from "react-redux";

export default function () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isSubmitting: "",
  });

  const { email, password, isSubmitting } = formData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({ ...formData, isSubmitting: true });
    const { data, error } = await makeRequest(axios.post, "/auth/login", {
      email,
      password,
    });

    if (error) {
      setFormData({
        ...formData,
        email: "",
        password: "",
        isSubmitting: false,
      });
      return Toast.error.fire({
        icon: "error",
        text: error,
      });
    }
    setFormData({
      email: "",
      password: "",
      isSubmitting: false,
    });

    dispatch(getUser({ data }));
    localStorage.setItem("user", data._id);
    localStorage.setItem("token", data.token);
    await Toast.success.fire({
      icon: "success",
      text: "Login successful",
    });

    navigate("/", { replace: true });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit} className="overflow-hidden">
      <div className=" h-screen  px-8 py-8  flex justify-center items-center ">
        <div className="flex px-8 pb-8 shadow-lg rounded-md bg-gray-50 flex-col items-center lg:w-2/4 w-full mx-auto space-y-4 border">
          <div className="text-3xl ml-4 mt-4 text-center uppercase font-extrabold  lg:ml-0 pt-4 text-gray-500">
            <span>Login</span>
          </div>

          <p className="text-center text-blue-600">Login your account</p>
          <div className="w-full ">
            <label htmlFor="email" className="py-2 text-lg text-gray-500">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={handleChange}
              className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
            />
          </div>
          <div className="w-full ">
            <label htmlFor="password" className="py-4 text-lg text-gray-500">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={handleChange}
              className="py-4 px-4 outline-none focus:border-blue-400 focus:outline-none rounded duration-500 bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full "
            />
            <Link to="/forget" className="flex justify-end mt-2 text-blue-600">
              Forgot-password
            </Link>
          </div>

          <button
            disabled={isSubmitting}
            className=" mt-2 py-4 w-full text-lg uppercase bg-blue-500 text-white focus:outline-none outline-none rounded"
          >
            Submit
          </button>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
              onClick={() => {}}
            >
              <Icons.Google size={20} />
            </button>
            <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
              <Icons.Twitter size={20} />
            </button>
            <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
              <Icons.Github size={20} />
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 dark:text-gray-400">
            Don't have an account?
            <Link
              to="/auth/register"
              className="underline ml-1 text-blue-500 dark:text-gray-100"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}
