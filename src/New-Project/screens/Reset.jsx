import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { handleReq } from "../../admin/utils/MakeRequest";

export default function () {
  const { accessToken } = useParams();
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
    accessToken: "",
  });

  useEffect(() => {
    if (accessToken) {
      setFormData({ ...formData, accessToken });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    /// make request
    const res = handleReq(`/auth/reset/${accessToken}`, "put");
    console.log(res);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className=" h-screen items-center flex justify-center px-8 py-4 mx-auto  ">
        <div className="flex px-8 pb-8 shadow-lg rounded-md bg-gray-50 flex-col items-center lg:w-2/4 w-full mx-auto space-y-4 border">
          <div className="text-3xl ml-4 mt-6 text-center uppercase font-extrabold  lg:ml-0 py-2 text-gray-500">
            <span>Reset Password</span>
          </div>
          <div className="w-full ">
            <label
              htmlFor="newPassword"
              className="py-2  text-lg text-gray-500"
            >
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              required
              value={formData.newPassword}
              onChange={handleChange}
              className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
            />
          </div>
          <div className="w-full ">
            <label
              htmlFor="confirmPassword"
              className="py-2 text-lg text-gray-500"
            >
              Repeat Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
            />
          </div>
          <button className=" mt-2 py-4 w-full text-lg uppercase bg-blue-500 text-white focus:outline-none outline-none rounded">
            Submit
          </button>
          <Link
            to="/register"
            className=" mt-4 py-4 w-full text-center text-lg uppercase bg-blue-500 text-white focus:outline-none outline-none rounded"
          >
            Register
          </Link>
        </div>
      </div>
    </form>
  );
}
