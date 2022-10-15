import React from "react";
import { Link, useLocation } from "react-router-dom";

function Empty() {
  const { pathname } = useLocation();
  return (
    <div className="h-screen">
      <div className="flex justify-center h-full items-center tracking-widest">
        <div className="text-center">
          <h1 className="text-[10rem] text-[700] text-red-500">404</h1>
          <h4 className="">
            Your request to access
            <span className="text-red-500">{pathname}</span> page was not found,
            check url
          </h4>
          <Link
            to="/"
            className="py-4 px-6 bg-blue-500 uppercase inline-block text-white mt-4 rounded hover:opacity-80 transition-all linear duration-700 "
          >
            {" "}
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Empty;
