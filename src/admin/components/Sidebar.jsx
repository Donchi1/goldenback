import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import * as Icons from "react-bootstrap-icons";

export default function Sidebar() {
  const { openSidebar } = useSelector((state) => state.admin);
  const { pathname } = useLocation();
  if (pathname.split("/")[1] === "admin") {
    return (
      <>
        <aside className="sidebar hidden lg:block  dark:border-r-2 dark:border-gray-800 dark:bg-gray-800 dark:text-white h-auto bg-gray-50 ">
          <div className="p-5 text-gray-600 sticky top-14  lg:top-20">
            <div className="mb-3">
              <h3 className="text-lg mb-2 font-bold uppercase text-blue-500 ">
                Dashboard
              </h3>
              <ul className="flex flex-col gap-1  ">
                <li>
                  <Link
                    to="/admin"
                    className=" dark:hover:text-black transition-all items-center gap-2 focus:bg-blue-100 flex duration-500 ease-linear p-2 text-gray-500  cursor-pointer   rounded-lg  hover:bg-blue-100 "
                  >
                    <Icons.House size={22} />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/sales"
                    className=" dark:hover:text-black transition-all items-center gap-2 focus:bg-blue-100 flex duration-500 ease-linear p-2 text-gray-500  cursor-pointer   rounded-lg  hover:bg-blue-100 "
                  >
                    <Icons.FilterRight size={22} />
                    Sales
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/analytics"
                    className=" dark:hover:text-black transition-all items-center gap-2 focus:bg-blue-100 flex duration-500 ease-linear p-2 text-gray-500  cursor-pointer   rounded-lg  hover:bg-blue-100 "
                  >
                    <Icons.GraphUp size={22} />
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-3">
              <h3 className="text-lg mb-2 font-bold uppercase text-blue-500 ">
                Menu
              </h3>
              <ul className="flex flex-col gap-1  ">
                <li>
                  <Link
                    to="/admin/users"
                    className="dark:hover:text-black transition-all items-center gap-2 focus:bg-blue-100 flex duration-500 ease-linear p-2 text-gray-500  cursor-pointer   rounded-lg  hover:bg-blue-100 "
                  >
                    <Icons.Person size={22} />
                    Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/orders"
                    className="dark:hover:text-black transition-all items-center gap-2 focus:bg-blue-100 flex duration-500 ease-linear p-2 text-gray-500  cursor-pointer   rounded-lg  hover:bg-blue-100 "
                  >
                    <Icons.Folder2 size={22} />
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/products"
                    className="dark:hover:text-black transition-all items-center gap-2 focus:bg-blue-100 flex duration-500 ease-linear p-2 text-gray-500  cursor-pointer   rounded-lg  hover:bg-blue-100 "
                  >
                    <Icons.SortDownAlt size={22} />
                    Products
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-3">
              <h3 className="text-lg mb-2 font-bold uppercase text-blue-500 ">
                Notifications
              </h3>
              <ul className="flex flex-col gap-1  ">
                <li>
                  <Link
                    to="/admin/messages"
                    className="dark:hover:text-black transition-all items-center gap-2 focus:bg-blue-100 flex duration-500 ease-linear p-2 text-gray-500  cursor-pointer   rounded-lg  hover:bg-blue-100 "
                  >
                    <Icons.House size={22} />
                    Messages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/emails"
                    className="dark:hover:text-black transition-all items-center gap-2 focus:bg-blue-100 flex duration-500 ease-linear p-2 text-gray-500  cursor-pointer   rounded-lg  hover:bg-blue-100 "
                  >
                    <Icons.FilterRight size={22} />
                    Email
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/sales"
                    className="dark:hover:text-black transition-all items-center gap-2 focus:bg-blue-100 flex duration-500 ease-linear p-2 text-gray-500  cursor-pointer   rounded-lg  hover:bg-blue-100 "
                  >
                    <Icons.FileBarGraph size={22} />
                    Reports
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" flex justify-end flex-col h-12 lg:h-20">
              <ul className="flex flex-col gap-1  ">
                <li>
                  <Link
                    to="/login"
                    className="hover:opacity-80 transition-all text-white items-center gap-2 bg-blue-500 flex duration-500 ease-linear p-2 cursor-pointer   rounded-lg   "
                  >
                    <Icons.DoorClosed size={22} />
                    Log-out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <aside
          className={`${
            openSidebar ? "-translate-x-full" : "translate-x-0"
          } transition-all z-40 ease-linear duration-500 dark:bg-gray-800 dark:text-white sidebar w-2/4 ta h-screen bg-gray-100 lg:hidden block fixed top-/admin/15 `}
        >
          <div className="p-5 text-gray-600">
            <div className="mb-3">
              <h3 className="text-lg mb-2 font-bold uppercase text-blue-500 ">
                Dashboard
              </h3>
              <ul className="flex flex-col gap-1  ">
                <li>
                  <Link
                    to="/admin"
                    className="dark:hover:text-black transition-all items-center gap-2 focus:bg-blue-100 flex duration-500 ease-linear p-2 text-gray-500  cursor-pointer   rounded-lg  hover:bg-blue-100 "
                  >
                    <Icons.House size={22} />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/sales"
                    className="dark:hover:text-black transition-all items-center gap-2 focus:bg-blue-100 flex duration-500 ease-linear p-2 text-gray-500  cursor-pointer   rounded-lg  hover:bg-blue-100 "
                  >
                    <Icons.FilterRight size={22} />
                    Sales
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/analytics"
                    className="dark:hover:text-black transition-all items-center gap-2 focus:bg-blue-100 flex duration-500 ease-linear p-2 text-gray-500  cursor-pointer   rounded-lg  hover:bg-blue-100 "
                  >
                    <Icons.GraphUp size={22} />
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-3">
              <h3 className="text-lg mb-2 font-bold uppercase text-blue-500 ">
                Menu
              </h3>
              <ul className="flex flex-col gap-1  ">
                <li>
                  <Link
                    to="/admin/users"
                    className="dark:hover:text-black transition-all items-center gap-2 focus:bg-blue-100 flex duration-500 ease-linear p-2 text-gray-500  cursor-pointer   rounded-lg  hover:bg-blue-100 "
                  >
                    <Icons.Person size={22} />
                    Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/orders"
                    className="dark:hover:text-black transition-all items-center gap-2 focus:bg-blue-100 flex duration-500 ease-linear p-2 text-gray-500  cursor-pointer   rounded-lg  hover:bg-blue-100 "
                  >
                    <Icons.Folder2 size={22} />
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/products"
                    className="dark:hover:text-black transition-all items-center gap-2 focus:bg-blue-100 flex duration-500 ease-linear p-2 text-gray-500  cursor-pointer   rounded-lg  hover:bg-blue-100 "
                  >
                    <Icons.SortDownAlt size={22} />
                    Products
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-3">
              <h3 className="text-lg mb-2 font-bold uppercase text-blue-500 ">
                Notifications
              </h3>
              <ul className="flex flex-col gap-1  ">
                <li>
                  <Link
                    to="/admin/messages"
                    className="dark:hover:text-black transition-all items-center gap-2 focus:bg-blue-100 flex duration-500 ease-linear p-2 text-gray-500  cursor-pointer   rounded-lg  hover:bg-blue-100 "
                  >
                    <Icons.House size={22} />
                    Messages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/sales"
                    className="dark:hover:text-black transition-all items-center gap-2 focus:bg-blue-100 flex duration-500 ease-linear p-2 text-gray-500  cursor-pointer   rounded-lg  hover:bg-blue-100 "
                  >
                    <Icons.FilterRight size={22} />
                    Email
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/sales"
                    className="dark:hover:text-black transition-all items-center gap-2 focus:bg-blue-100 flex duration-500 ease-linear p-2 text-gray-500  cursor-pointer   rounded-lg  hover:bg-blue-100 "
                  >
                    <Icons.FileBarGraph size={22} />
                    Reports
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" flex justify-end flex-col h-12 lg:h-20">
              <ul className="flex flex-col gap-1  ">
                <li>
                  <Link
                    to="/admin"
                    className="hover:opacity-80 transition-all items-center gap-2 bg-blue-500 flex duration-500 ease-linear p-2 text-white  cursor-pointer   rounded-lg   "
                  >
                    <Icons.DoorClosed size={22} />
                    Log-out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </>
    );
  }
}
