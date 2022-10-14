import React, { useContext, useState } from "react";

import * as Icons from "react-bootstrap-icons";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import SubCart from "../screens/SubCart";
import { goldenContext } from "../context/GoldenProvider";
import { AuthContext } from "../context/AuthContextProvider";
import avater from "/ecoms/images/avatar.jpg";
import { motion } from "framer-motion";

import ModalWrapper from "./ModalWrapper";

function Nav() {
  const { pathname } = useLocation();
  const {
    cart,
    sumTotal,
    searchItem,
    setOpenModal,
    setOpenSearch,
    openSearch,
  } = useContext(goldenContext);
  const navigate = useNavigate();
  const [openCart, setOpenCart] = useState();

  const [item, setSearchItem] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const { user } = useContext(AuthContext);

  const handleSearch = () => {
    if (!item) return;
    navigate({ pathname: "/product/search", state: item });
    searchItem(item);
    setOpenSearch(true);
  };

  const handleChange = (e) => {
    setSearchItem(e.target.value);
    handleSearch();
  };

  if (pathname.split("/")[1] !== "auth") {
    return (
      <>
        <header
          className="
      
      h-16
      
      
       px-6
       lg:px-0
      bg-white
      sticky
      top-0
      z-40 shadow"
        >
          <div
            className="container mx-auto pt-2 flex
      justify-between items-center"
          >
            <div className={`${openSearch && "hidden lg:block"}`}>
              <Link to="/">
                <h1 className="font-medium text-2xl text-gray-400">
                  <span className=" italic font-semibold text-4xl text-blue-500">
                    G
                  </span>
                  olden
                </h1>
              </Link>
            </div>
            <div
              className={` lg:flex  items-center  relative ${
                openSearch
                  ? "flex w-11/12 lg:w-3/5 transition-all linear duration-500"
                  : "hidden w-6/12 "
              } `}
            >
              <Icons.X
                onClick={() => setOpenSearch(false)}
                className="text-2xl lg:hidden font-semibold text-red-500 cursor-pointer "
              />

              <input
                type="search"
                name="search"
                value={item}
                onChange={handleChange}
                placeholder="Search Product"
                className={` pl-2 ${
                  openSearch && "max-w-full "
                } lg:max-w-full transition-all linear duration-500 mx-auto lg:mx-0 w-4/5 lg:w-full py-2  rounded border-2 border-blue-200 outline-none`}
              />
              <button
                onClick={handleSearch}
                className="py-3 bg-blue-500 px-3 focus:outline-none  absolute lg:-right-10 -right-3 rounded outline-none border-none border-0"
              >
                <Icons.Search className="text-white text-xl " />
              </button>
            </div>
            <div
              className={`${
                openSearch && "hidden lg:flex"
              } space-x-4 lg:space-x-8 flex items-center justify-center transition-all ease-linear duration-500`}
            >
              <Icons.Search
                onClick={() => setOpenSearch(true)}
                className=" text-gray-400 lg:text-2xl text-xl lg:hidden cursor-pointer"
              />
              <div className="relative">
                {user ? (
                  <img
                    src={avater}
                    onClick={() => setOpenDropdown((prev) => !prev)}
                    className="w-[40px] h-[40px] cursor-pointer rounded-full"
                  />
                ) : (
                  <Icons.Person
                    onClick={() => setOpenDropdown((prev) => !prev)}
                    className="text-gray-400 ml-6 lg:ml-0  text-xl lg:text-2xl cursor-pointer"
                  />
                )}
                {openDropdown && (
                  <div className="absolute w-[8rem] flex flex-col lg:right-0 right-1 gap-6 bg-white shadow-lg top-[2.8rem] p-4">
                    {user ? (
                      <>
                        <Link
                          onClick={() => setOpenDropdown((prev) => !prev)}
                          className="border-2 transition-all ease-linear duration-500 hover:opacity-60 border-blue-500 p-2 text-blue-500 rounded-lg "
                          to="/profile"
                        >
                          Profile
                        </Link>
                        <Link
                          onClick={() => {
                            setOpenDropdown((prev) => !prev);
                            logout();
                          }}
                          className="border-2 transition-all ease-linear duration-500 hover:opacity-60 border-blue-500 p-2 text-blue-500 rounded-lg "
                          to="/#"
                        >
                          LogOut
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          onClick={() => setOpenDropdown((prev) => !prev)}
                          className="border-2 transition-all ease-linear duration-500 hover:opacity-60 border-blue-500 p-2 text-blue-500 rounded-lg "
                          to="/auth/login"
                        >
                          Login
                        </Link>
                        <Link
                          onClick={() => setOpenDropdown((prev) => !prev)}
                          className="border-2 transition-all ease-linear duration-500 hover:opacity-60 border-blue-500 p-2 text-blue-500 rounded-lg "
                          to="/auth/register"
                        >
                          Register
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
              <div
                onClick={() => setOpenCart(true)}
                className="pr-3 cursor-pointer relative "
              >
                <Icons.Cart className="lg:text-2xl text-xl text-gray-400" />{" "}
                <span className="absolute  transition-all ease-linear duration-700 text-white text-xs -top-2 right-1 bg-blue-500 px-1 rounded-full">
                  {cart.length > 0 && cart.length}
                </span>
              </div>
            </div>
          </div>
        </header>
        <SubCart
          cart={cart}
          openCart={openCart}
          setOpenCart={setOpenCart}
          navigate={navigate}
          subTotal={sumTotal}
        />
        <ModalWrapper />
      </>
    );
  }
}

export default Nav;
