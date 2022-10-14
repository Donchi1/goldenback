import React, { useContext, useState } from "react";
import * as Icons from "react-bootstrap-icons";
import { goldenContext } from "../context/GoldenProvider";

import { useNavigate } from "react-router-dom";

import Title from "../components/Title";
import formatCurrency from "../utils/formatCurrency";
import Footer from "../components/Footer";

function ProductCart() {
  const {
    cart,
    clearCart,
    removeCart,
    sumTotal,
    increment,
    decrement,

    setCart,

    productInputChange,
    sumSingle,
  } = useContext(goldenContext);

  const navigate = useNavigate();
  const handleUpdate = (item) => {
    fetch({ method: "Post", url: "localhost:5000/api/cart/update", body: item })
      .then((res) => res.json())
      .then((info) => {
        console.log(info);
      })
      .catch((err) => console.log(err));
  };

  const totalItem = () =>
    cart.reduce((accm, { quantity }) => quantity + accm, 0);

  const reset = (id) => {
    const maped = cart.map((item) => {
      if (item.id === id)
        return { ...item, quantity: 1, update: false, inStock: true };
      return item;
    });
    return setCart(maped);
  };

  const totalDiscount = () =>
    cart.reduce((acc, { discount }) => discount + acc, 0);

  if (cart.length > 0) {
    return (
      <>
        <Title text="Cart" />
        <div className="flex w-[90%] mx-auto h-auto lg:h-screen gap-8 flex-wrap lg:flex-nowrap mb-[10rem]">
          <div className="">
            {cart?.map((item, idx) => (
              <div key={item.id}>
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
                      disabled={item.quantity === 1}
                      onClick={() => decrement(item.id)}
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
                      onChange={(e) =>
                        productInputChange(item.id, e.target.value)
                      }
                    />
                    <button
                      className="ml-4 text-2xl outline-none border-0 focus:outline-none"
                      disabled={item.quantity === 9}
                      onClick={() => increment(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex-col flex space-y-1">
                    <span className="capitalize text-gray-500 text-center">
                      sum
                    </span>
                    <span className="text-gray-900 text-xl">
                      {sumSingle(item.id)}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <button
                      title="Remove"
                      onClick={() => removeCart(item.id)}
                      className=" p-2 hover:bg-blue-400 transition-all duration-500 ease-linear uppercase bg-blue-500 text-white outline-none rounded"
                    >
                      <Icons.Trash size={36} />
                    </button>
                    {item.update && (
                      <>
                        <button
                          title="Reset"
                          className=" p-2  uppercase hover:bg-red-400 transition-all duration-500 ease-linear bg-red-500 text-white outline-none rounded"
                          onClick={() => reset(item.id)}
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
            {cart.length > 0 && (
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
                  <span className="text-xl text-red-500 ml-2">
                    {" "}
                    {sumTotal()}
                  </span>
                </h2>
                <button
                  onClick={() => {
                    clearCart();
                    navigate("/");
                  }}
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
