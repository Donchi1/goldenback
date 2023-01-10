import React, { useEffect, useState } from "react";

import * as Icons from "react-bootstrap-icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SubCart from "../screens/SubCart";

import avater from "/ecoms/images/avatar.jpg";
import { motion } from "framer-motion";

import ModalWrapper from "./ModalWrapper";
import { getProducts, getSearchItems, openSearch } from "../State/goldenSlice";
import { getUser, logout } from "../State/authSlice";
import makeRequest from "../utils/makeRequest";
import axios from "../utils/axios";
import { getCart } from "../State/cartSlice";

function Nav() {
  const { pathname } = useLocation();

  const { searchItem, search } = useSelector((state) => state.golden);
  const { quantity, products, total } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openCart, setOpenCart] = useState();

  const [item, setSearchItem] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [cartId] = useState(
    localStorage.getItem("cartId") || "6375f47ae7abd0feaabe1d36"
  );
  const [id] = useState(
    localStorage.getItem("user") || "6375f47ae7abd0feaabe1d36"
  );
  const img = user?.photo?.split("..")[1].split("\\").join("/").slice(14, 50);

  console.log(id);
  console.log(cartId);
  //for backend
  console.log(user);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res3 = await axios.get("/products/find");
        dispatch(getProducts(res3.data));
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);
  useEffect(() => {
    const getMyUser = async () => {
      try {
        const res = await axios.get(`/users/find/${id}`);
        const res1 = await axios.get(`/carts/find/${cartId}`);
        dispatch(getUser({ data: res.data }));
        dispatch(getCart({ data: res1.data }));
      } catch (error) {
        console.log(error.response?.data?.message);
      }
    };
    getMyUser();
  }, []);

  const handleSearch = () => {
    if (!item) return;
    dispatch(openSearch(true));
    // const { data, error } = makeRequest(
    //   axios.get,
    //   `/products/find?text=${item}`
    // );

    navigate({ pathname: "/product/search", state: item });
    dispatch(getSearchItems(item));
  };

  const logMeout = async () => {
    const res = await axios.delete("/auth/logout");

    dispatch(logout());
    localStorage.removeItem("user");
    localStorage.removeItem("cartId");
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
            <div className={`${search && "hidden lg:block"}`}>
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
                search
                  ? "flex w-11/12 lg:w-3/5 transition-all linear duration-500"
                  : "hidden w-6/12 "
              } `}
            >
              <Icons.X
                onClick={() => dispatch(openSearch(false))}
                className="text-2xl lg:hidden font-semibold text-red-500 cursor-pointer "
              />

              <input
                type="search"
                name="search"
                value={item}
                onChange={handleChange}
                placeholder="Search Product"
                className={` pl-2 ${
                  search && "max-w-full "
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
                search && "hidden lg:flex"
              } space-x-4 lg:space-x-8 flex items-center justify-center transition-all ease-linear duration-500`}
            >
              <Icons.Search
                onClick={() => dispatch(openSearch(true))}
                className=" text-gray-400 lg:text-2xl text-xl lg:hidden cursor-pointer"
              />
              <div className="relative">
                {user?._id ? (
                  <img
                    src={img || avater}
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
                    {user?._id ? (
                      <>
                        <Link
                          onClick={() => setOpenDropdown((prev) => !prev)}
                          className="border-2 transition-all ease-linear duration-500 hover:opacity-60 border-blue-500 p-2 text-blue-500 rounded-lg "
                          to="/profile"
                        >
                          Profile
                        </Link>
                        <Link
                          onClick={() => setOpenDropdown((prev) => !prev)}
                          className="border-2 transition-all ease-linear duration-500 hover:opacity-60 border-blue-500 p-2 text-blue-500 rounded-lg "
                          to="/products/order"
                        >
                          Orders
                        </Link>
                        <Link
                          onClick={() => {
                            setOpenDropdown((prev) => !prev);
                            logMeout();
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
                  {quantity > 0 && quantity}
                </span>
              </div>
            </div>
          </div>
        </header>
        <SubCart
          cart={products}
          openCart={openCart}
          setOpenCart={setOpenCart}
          navigate={navigate}
          total={total}
        />
        <ModalWrapper />
      </>
    );
  }
}

export default Nav;
