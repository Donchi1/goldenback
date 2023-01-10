import React from "react";
import * as Icons from "react-bootstrap-icons";
//import { removeCart, sumDatas } from "../state/goldenSlice";
import { removeCart } from "../State/cartSlice";
import { useDispatch } from "react-redux";
import formatCurrency from "../utils/formatCurrency";
import axios from "../utils/axios";

function SubCart({ openCart, setOpenCart, cart, navigate, total }) {
  const dispatch = useDispatch();
  const cartId = localStorage.getItem("cartId");

  const handleRemoveCart = async (id) => {
    try {
      const res = await axios.delete(`/carts/delete/${cartId}/${id}`);
      console.log(res.data);
      res.data?.empty && localStorage.removeItem("cartId");
      dispatch(removeCart(id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {openCart && (
        <div className="relative  ">
          <div className="fixed z-40  right-0 left-0 bottom-0 top-0 bg-gray-500 bg-opacity-50"></div>
          <div className=" overflow-y-auto bg-white w-3/5 lg:w-2/5 h-screen z-40 fixed top-0 right-0">
            <div className="flex justify-between mx-2 items-center py-5 border-b-2 border-gray-400 ">
              <h3 className="font-normal text-3xl">Cart</h3>
              <Icons.X
                className="font-normal text-3xl cursor-pointer"
                onClick={() => setOpenCart(false)}
              />
            </div>
            {cart.map((each) => (
              <div key={each._id}>
                <div className="flex space-x-2 lg:items-center items-stretch border-b-2 border-gray-400">
                  <div className=" py-7 ">
                    <img
                      src={each.img}
                      alt="cart product"
                      className="w-40 object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <p className="mb-2  text-gray-500">{each.name}</p>
                      <Icons.X
                        onClick={() => handleRemoveCart(each._id)}
                        className="cursor-pointer text-2xl text-red-500 font-semibold"
                      />
                    </div>
                    <h3 className="capitalize ">
                      {each.description?.slice(0, 70)} ...
                    </h3>
                    <div className="flex space-x-6 mt-1">
                      <span className="font-semibold ">${each.price}</span>
                      <span>
                        {each.quantity} x ${each.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="mb-5">
              <div className="flex justify-around items-center py-4">
                <span className="text-gray-500 text-xl">Subtotal</span>
                <span className="text-gray-900 font-bold text-xl">
                  {formatCurrency(total)}
                </span>
              </div>
              <div className="flex flex-col space-y-4 w-4/5 mx-auto ">
                <button
                  onClick={() => {
                    navigate("/cart");
                    setOpenCart(false);
                  }}
                  className="py-3 uppercase text-gray-500 border-2 rounded border-gray-500 outline-none"
                >
                  View Cart
                </button>

                <button
                  onClick={() => {
                    setOpenCart(false), navigate("/payment/checkout");
                  }}
                  className=" py-3 uppercase bg-blue-500 text-white outline-none rounded"
                >
                  checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {openCart && cart.length === 0 && (
        <div className="bg-white w-3/5 lg:w-2/5 h-screen z-50 fixed top-0 right-0">
          <div className="flex justify-between mx-2 items-center py-5 border-b-2 border-gray-400 ">
            <h3 className="font-normal text-3xl">Cart</h3>
            <Icons.X
              className="font-normal text-3xl  cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>
          <h1 className="text-center text-red-500 text-xl m-8">
            YOUR CART IS CURRNTLY EMPTY
          </h1>
        </div>
      )}
    </>
  );
}

export default SubCart;
