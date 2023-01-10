import React from "react";

function RelatedProducts({
  addToCart,
  item,
  setOpenModal,
  modalFile,
  setLight,
  dispatch,
}) {
  return (
    <div>
      <div className="flex gap-4 lg:flex-nowrap flex-wrap cursor-pointer py-4 bg-gray-200  px-4  text-center mb-8">
        {item?.map((each) => (
          <div
            key={each?._id}
            className="border-2 px-4  bg-white border-gray-200 "
          >
            <div className="">
              <h1 className="text-xl leading-10 font-medium">{each?.name}</h1>
              <h2 className="text-blue-400 text-lg capitalize">
                price: ${each?.price}
              </h2>
              <p>{each?.description.slice(1, 100)}</p>
            </div>
            <img
              src={each?.img}
              alt="product"
              width={"400px"}
              className=" object-contain mt-4 mx-auto max-h-full h-48"
              onClick={() => {
                dispatch(setOpenModal(true));
                dispatch(modalFile(each?._id));
                setLight(false);
              }}
            />
            <button
              className="w-full  py-3 px-8 uppercase my-4 transition-colors ease-linear duration-500 hover:bg-blue-700 bg-blue-500 text-white outline-none rounded"
              onClick={() => dispatch(addToCart(each?._id))}
            >
              {each?.inCart ? "InCart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
