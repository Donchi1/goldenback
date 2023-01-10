import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../State/cartSlice";
import { getModalFile, openModal } from "../State/goldenSlice";
import { getFiltered } from "../utils/getFiltered";

function Search() {
  const dispatch = useDispatch();
  const { searchItem } = useSelector((state) => state.golden);
  const { state } = useLocation();

  if (searchItem?.length === 0) {
    return (
      <h1 className="text-center text-red-500 text-xl m-8">
        SORRY NO SUCH PRODUCT FOUND
      </h1>
    );
  }

  return (
    <div>
      <h2 className="text-center  text-2xl font-normal text-gray-500 pt-8 pb-4 uppercase ">
        {state} <span className="text-blue-400 ">Products</span>
      </h2>
      <div className="border-b-5   bg-blue-400 w-24 mx-auto h-4 mb-8 rounded" />

      <div
        className={`${
          searchItem?.length === 1
            ? "flex justify-center items-center"
            : "grid  grid-col-1 lg:grid-cols-4"
        }  gap-2  cursor-pointer py-4 bg-gray-200  px-8  text-center mb-8`}
      >
        {searchItem?.map((each) => (
          <div
            key={each._id}
            className="border-2 px-4  bg-white border-gray-200 "
          >
            <div className="">
              <h1 className="text-xl leading-10 font-medium">{each.name}</h1>
              <h2 className="text-blue-400 text-lg capitalize">
                price: ${each.price}
              </h2>
              <p>{each.description.slice(1, 100)}</p>
            </div>
            <img
              src={each.img}
              alt="product"
              width={"400px"}
              className=" object-contain mt-4 mx-auto max-h-full h-48"
              onClick={() => {
                dispatch(openModal(true));
                dispatch(getModalFile(each._id));
              }}
            />
            <button
              className="w-full  py-3 px-8 uppercase my-4 transition-colors ease-linear duration-500 hover:bg-blue-700 bg-blue-500 text-white outline-none rounded"
              onClick={() => dispatch(addToCart({ info: each, quantity: 1 }))}
            >
              {each.inCart ? "InCart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
