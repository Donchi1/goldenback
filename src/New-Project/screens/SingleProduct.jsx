import React, { useEffect, useState } from "react";
import formatCurrency from "../utils/formatCurrency";
import makeRequest from "../utils/makeRequest";
import axios from "../utils/axios";
import { getModalFile, openModal } from "../State/goldenSlice";
import { addToCart } from "../State/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function SingleProduct({
  item,

  title,
}) {
  const dispatch = useDispatch();
  const { quantity } = useSelector((state) => state.cart);
  const [cartId, setCartId] = useState(null);

  useEffect(() => {
    setCartId(localStorage.getItem("cartId"));
  }, [quantity]);

  const handleToCart = (info) => {
    dispatch(addToCart({ info, cartId, quantity: 1 }));

    // try {
    //   const res = await axios.post(`/carts/create/${cartId}`, info);
    //   dispatch(addToCart({ data: { ...info, inCart: true }, quantity: 1 }));
    //   if (localStorage.getItem("cartId")) return;
    //   localStorage.setItem("cartId", res.data.dbCart._id);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div className="lg:w-[89%] w-full mx-auto">
      <h2 className="text-center  text-2xl font-normal text-gray-500 pt-8 pb-4 uppercase ">
        {title} <span className="text-blue-400 ">Products</span>
      </h2>
      <div className="border-b-5   bg-blue-400 w-24 mx-auto h-4 mb-8 rounded" />

      <div className="flex gap-4  flex-wrap lg:flex-nowrap  cursor-pointer py-4 justify-center px-8  text-center mb-8">
        {item?.map((each, idx) => (
          <div
            key={idx}
            className="border-2 px-4 shadow-lg rounded-lg  bg-white border-gray-200 "
          >
            <div className="">
              <h1 className="text-xl leading-10 font-medium">{each?.name}</h1>
              <h2 className="text-blue-400 text-lg capitalize">
                price: {formatCurrency(each?.price)}
              </h2>
              <p>{each?.description.slice(1, 100)}</p>
            </div>
            <img
              src={each?.img}
              alt="product"
              width={"400px"}
              className=" object-contain mt-4 mx-auto max-h-full h-48"
              onClick={() => {
                dispatch(openModal(true));
                dispatch(getModalFile(each?._id));
              }}
            />
            <button
              className="w-full  py-3 px-8 uppercase my-4 transition-colors ease-linear duration-500 hover:bg-blue-700 bg-blue-500 text-white outline-none rounded"
              onClick={() => handleToCart(each)}
            >
              {each?.inCart ? "InCart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleProduct;
