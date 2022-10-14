import React from "react";
import * as Icons from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function Title({ text, product }) {
  const { pathname } = useLocation();

  if (pathname !== "/") {
    return (
      <div className="h-40 bg-gray-200 text-center pb-8">
        <div className="flex items-center uppercase font-bold pt-5 justify-center">
          <Icons.ArrowLeft className="text-center mr-3 " />
          <Link className="mr-4 text-blue-500" to="/">
            Home
          </Link>
          {"|"} {""} <span className="ml-4">{pathname.split("/")[1]}</span>
        </div>
        <h3 className="text-3xl ml-4 pt-6 uppercase font-bold ">{text}</h3>
        <h2 className="text-">{product && product}</h2>
      </div>
    );
  } else {
    return null;
  }
}

export default Title;
