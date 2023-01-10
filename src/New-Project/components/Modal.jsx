import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Modal({ modalData, setOpenModal }) {
  const dispatch = useDispatch();
  return (
    <div className="h-screen ">
      <div className="flex justify-center items-center  pb-2 h-[100%] lg:h-[50%] xl:h-[70%] xl:mt-[8%] lg:mt-[35%] bg-white px-4">
        <div>
          <h1 className="text-tomato-100 text-3xl lg:text-5xl  capitalize my-6 mx-0 text-center">
            Product Detail
          </h1>
          <div className="flex  lg:flex-nowrap flex-wrap justify-center lg:items-center   ">
            <div className="flex justify-center items-center">
              <img src={modalData.img} alt="product" className="lg:w-96" />
            </div>
            <div className="lg:w-9/12 w-full text-center lg:text-justify  mx-4 lg:mx-0">
              <h2 className="mb-8 text-2xl  font-medium">{modalData.name}</h2>
              <p>{modalData.description}</p>
              <div className="flex space-x-8 mt-6">
                <Link to="/">
                  <button
                    onClick={() => dispatch(setOpenModal(false))}
                    className="w-full transition-all ease-linear  hover:bg-red-700 bg-red-500  duration-500 py-3 px-8 uppercase text-white border-2 outline-none focus:outline-none rounded"
                  >
                    Products
                  </button>
                </Link>
                <Link to={`/productDetails/${modalData._id}`}>
                  <button
                    onClick={() => {
                      dispatch(setOpenModal(false));
                    }}
                    className="w-full   transition-all duration-500 ease-linear hover:bg-blue-700  py-3 px-8 uppercase bg-blue-500 text-white outline-none rounded"
                  >
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
