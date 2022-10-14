import React from "react";
import { Link, Outlet } from "react-router-dom";
import UserDatalist from "../../components/UserDatalist";

export default function User() {
  return (
    <div className="h-screen flex-[4] dark:bg-black ">
      <div className="flex  justify-between items-center mx-4 mt-8 mb-4">
        <h1 className="dark:text-white text-gray-800  font-extrabold text-3xl    uppercase">
          All Users
        </h1>
        <Link to="/admin/users/create">
          <button className=" py-2 px-4 bg-green-400 text-white  rounded-lg">
            Create
          </button>
        </Link>
      </div>
      <div className=" shadow-lg h-[85%] rounded-lg mt-4 mx-4 bg-gray-50 dark:bg-gray-800 dark:text-gray-300">
        <UserDatalist />

        <Outlet />
      </div>
    </div>
  );
}
