import React from "react";
import formatCurrency from "../utils/formatCurrency";

function SingleProduct({ addToCart, item, setOpenModal, modalFile, title }) {
  return (
    <div className="lg:w-[89%] w-full mx-auto">
      <h2 className="text-center  text-2xl font-normal text-gray-500 pt-8 pb-4 uppercase ">
        {title} <span className="text-blue-400 ">Products</span>
      </h2>
      <div className="border-b-5   bg-blue-400 w-24 mx-auto h-4 mb-8 rounded" />

      <div className="flex gap-4  flex-wrap lg:flex-nowrap  cursor-pointer py-4 justify-center px-8  text-center mb-8">
        {item.map((each) => (
          <div
            key={each.id}
            className="border-2 px-4 shadow-lg rounded-lg  bg-white border-gray-200 "
          >
            <div className="">
              <h1 className="text-xl leading-10 font-medium">{each.name}</h1>
              <h2 className="text-blue-400 text-lg capitalize">
                price: {formatCurrency(each.price)}
              </h2>
              <p>{each.description.slice(1, 100)}</p>
            </div>
            <img
              src={each.img}
              alt="product"
              width={"400px"}
              className=" object-contain mt-4 mx-auto max-h-full h-48"
              onClick={() => {
                setOpenModal(true);
                modalFile(each.id);
              }}
            />
            <button
              className="w-full  py-3 px-8 uppercase my-4 transition-colors ease-linear duration-500 hover:bg-blue-700 bg-blue-500 text-white outline-none rounded"
              onClick={() => addToCart(each.id)}
            >
              {each.inCart ? "InCart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleProduct;
