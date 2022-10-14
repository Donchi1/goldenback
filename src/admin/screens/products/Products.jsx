import React from "react";
import { Link, Outlet } from "react-router-dom";
import ProductDatalist from "../../components/ProductDatalist";

export default function products() {
  return (
    <div className="flex-[4] dark:bg-black h-screen">
      <div className="mx-4 h-[85%]">
        <div className="flex  justify-between items-center  mt-8 mb-4">
          <h1 className="dark:text-white text-gray-800  font-extrabold text-3xl    uppercase">
            All Products
          </h1>
          <Link to="/admin/products/create">
            <button className=" py-2 px-4 bg-green-400 text-white  rounded-lg">
              Create
            </button>
          </Link>
        </div>
        <ProductDatalist />
        <Outlet />
      </div>
    </div>
  );
}
