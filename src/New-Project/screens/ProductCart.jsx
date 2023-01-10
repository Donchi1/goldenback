import React from "react";
import * as Icons from "react-bootstrap-icons";
import { sumDatas } from "../State/goldenSlice";
import {
  getCart,
  decrement,
  removeCart,
  increment,
  clearCart,
  resetCart,
} from "../State/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import Title from "../components/Title";
import formatCurrency from "../utils/formatCurrency";
import Footer from "../components/Footer";
import axios from "../utils/axios";
import makeRequest from "../utils/makeRequest";

function ProductCart() {
  const cid = localStorage.getItem("cartId");
  const dispatch = useDispatch();
  const { products, total } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const handleUpdate = async (item) => {
    const { data, error } = await makeRequest(
      axios.put,
      `/carts/update/${cid}/${item._id}`,
      item
    );
    const newP = products.map((each) => {
      if (each._id === item._id) {
        return { ...each, update: false };
      }
    });
    dispatch(getCart({ data: newP }));
    console.log(error);
  };
  const handleClear = async () => {
    const { data, error } = await makeRequest(
      axios.delete,
      `/carts/delete/${cid}`
    );
    console.log(error);
    if (data) {
      localStorage.removeItem("cartId");
      dispatch(clearCart());
      navigate("/");
    }
  };

  const totalItem = () =>
    products.reduce((accm, { quantity }) => quantity + accm, 0);

  const reset = async (id) => {
    const file = products.find((each) => each._id === id);
    const maped = products.map((each) => {
      if (each._id === id) {
        return { ...each, quantity: 1, update: false };
      }
      return each;
    });

    return dispatch(resetCart({ cid, id, file, maped }));
  };

  const totalDiscount = () =>
    products.reduce((acc, { discount }) => acc + discount, 0);

  const sumSingle = (id) => {
    const item = products.find((each) => each._id === id);
    const total = item.price * item.quantity;

    return formatCurrency(total);
  };

  const cartId = localStorage.getItem("cartId");

  const handleRemoveCart = async (id) => {
    try {
      const res = await axios.delete(`/carts/delete/${cartId}/${id}`);

      res.data?.empty && localStorage.removeItem("cartId");
      dispatch(removeCart(id));
    } catch (error) {
      console.log(error);
    }
  };

  if (products.length > 0) {
    return (
      <>
        <Title text="Cart" />
        <div className="flex w-[90%] mx-auto h-auto lg:h-screen gap-8 flex-wrap lg:flex-nowrap mb-[10rem]">
          <div className="">
            {products?.map((item, idx) => (
              <div key={item._id}>
                <div className="flex flex-1 py-8 justify-around items-center  mx-2 flex-wrap text-center  lg:flex-nowrap ">
                  <div className="w-80 lg:w-52 my-4  lg:my-0 cursor-pointer">
                    <img
                      src={item.img}
                      alt="product"
                      className=" object-cover  w-72 mx-auto"
                      //onClick={() => push("/productDetails")}
                    />
                  </div>
                  <div className=" ml-4 pr-4  lg:pr-0">
                    <h3 className="space-x-4 mb-6">
                      <span className="text-2xl mb-4 uppercase text-gray-500">
                        {item.name}
                      </span>
                      {item.inStock ? (
                        <span className="text-blue-800 uppercase px-8 py4 bg-blue-100 border-2 rounded">
                          Instock
                        </span>
                      ) : (
                        <span className="text-red-500 uppercase px-8 py4 bg-red-100 border-2 rounded">
                          Out Of Stock
                        </span>
                      )}
                    </h3>

                    <p className="capitalize">
                      {item.description?.slice(0, 250)} ...
                    </p>
                  </div>
                </div>
                <div className="container flex-col lg:flex-row space-y-2 lg:space-y-0 mx-auto border-b-2 border-gray-400 flex justify-around pb-8 items-center">
                  <div className="flex-col flex  space-y-1">
                    <span className="capitalize text-gray-500 text-center">
                      price
                    </span>
                    <span className="text-gray-900 text-xl ">
                      {formatCurrency(item.price)}
                    </span>
                  </div>
                  <div className="">
                    <button
                      className="mr-4 text-2xl outline-none border-0 focus:outline-none"
                      disabled={
                        item.quantity > item.stock || item.quantity === 1
                      }
                      onClick={() => dispatch(decrement({ id: item._id }))}
                    >
                      -
                    </button>
                    <input
                      value={item.quantity}
                      type="number"
                      inputMode="numeric"
                      className="number-Input  rounded outline-none py-2 border-gray-700 border pl-7"
                      min={1}
                      max={8}
                      disabled
                      // onChange={(e) =>
                      //   productInputChange(item.id, e.target.value)
                      // }
                    />
                    <button
                      className="ml-4 text-2xl outline-none border-0 focus:outline-none"
                      disabled={item.quantity === item.stock}
                      onClick={() => dispatch(increment({ id: item._id }))}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex-col flex space-y-1">
                    <span className="capitalize text-gray-500 text-center">
                      sum
                    </span>
                    <span className="text-gray-900 text-xl">
                      {sumSingle(item._id)}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <button
                      title="Remove"
                      onClick={() => handleRemoveCart(item._id)}
                      className=" p-2 hover:bg-blue-400 transition-all duration-500 ease-linear uppercase bg-blue-500 text-white outline-none rounded"
                    >
                      <Icons.Trash size={36} />
                    </button>
                    {item.update && (
                      <>
                        <button
                          title="Reset"
                          className=" p-2  uppercase hover:bg-red-400 transition-all duration-500 ease-linear bg-red-500 text-white outline-none rounded"
                          onClick={() => dispatch(reset(item._id))}
                        >
                          <Icons.X size={36} />
                        </button>
                        <button
                          title="Update"
                          className=" p-2 hover:bg-green-400 transition-all duration-500 ease-linear uppercase bg-green-500 text-white outline-none rounded"
                          onClick={() => handleUpdate(item)}
                        >
                          <Icons.Check size={36} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" lg:w-[40%] w-full shadow lg:mr-4 space-y-3 text-left pt-8 my-8 border-2 px-8  ">
            {products.length > 0 && (
              <>
                <h2 className="text-lg opacity-70 font-medium text-gray-700 ">
                  {totalItem() > 1 ? "Total Items" : "Total Item"}
                  <span className="text-lg text-red-500 ml-2">
                    {totalItem()}
                  </span>
                </h2>
                <h2 className="text-lg opacity-70 font-medium text-gray-700 ">
                  Discount:
                  <span className="text-lg text-red-500 ml-2">
                    {formatCurrency(totalDiscount())}
                  </span>
                </h2>

                <h2 className="text-xl font-bold text-gray-700 ">
                  Total Cost:
                  <span className="text-xl text-red-500 ml-2"> {total}</span>
                </h2>
                <button
                  onClick={handleClear}
                  className="w-full  transition-colors ease-linear duration-500 py-3 px-8 hover:bg-red-700 uppercase bg-red-500 text-white outline-none rounded"
                >
                  Clear Cart
                </button>
                <button
                  onClick={() => {
                    navigate("/payment/checkout");
                  }}
                  className="w-full  py-3 px-8 uppercase transition-colors ease-linear duration-500 hover:bg-blue-700 bg-blue-500 text-white outline-none rounded"
                >
                  Check Out
                </button>
              </>
            )}

            <div style={{ textAlign: "center" }}></div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <h1 className="text-center text-red-500 text-xl m-8">
        YOUR CART IS CURRNTLY EMPTY
      </h1>
    );
  }
}

export default ProductCart;
