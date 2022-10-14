import React, { useContext, useState, Fragment } from "react";
import { goldenContext } from "../context/GoldenProvider";
import { Link, useLocation, useParams } from "react-router-dom";
import Title from "../components/Title";
import ModalWrapper from "../components/ModalWrapper";

import RelatedProducts from "../components/RelatedProducts";
import Footer from "../components/Footer";

function ProductDetails() {
  const { id } = useParams();

  const {
    addToCart,
    mobile,
    increment,
    decrement,
    cart,
    openModal,
    productInputChange,

    modalFile,
    setOpenModal,
  } = useContext(goldenContext);

  const [a, b, c, d, e, f, g, h, i, j, k, l] = mobile;
  const latest = [i, j, i];

  const item = mobile.find((e) => e.id === id);

  if (!item) {
    return (
      <div>
        <h1 className="text-center text-red-500 text-xl m-8">
          No product Found
        </h1>
      </div>
    );
  }

  const [subImage, setsubImage] = useState(item.img);

  const [light, setLight] = useState(false);

  const handleImg = (e) => {
    setsubImage(e.target.src);
  };

  const handleClick = () => {
    setOpenModal(true);
    setLight(true);
  };

  return (
    <>
      <Title text="Product info" Product={item.name} />
      <section className="container mx-auto">
        <div className="flex items-center  flex-col lg:flex-row mx-3">
          <div className="mt-10 flex-auto w-full ">
            <img
              src={subImage}
              className=" w-96 h-[300px]  mx-auto"
              alt="product"
              onClick={handleClick}
            />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl my-4 mx-0">{item.name}</h2>
            <h3 className="mb-2 text-2xl text-gray-500">
              category: {item.category}
            </h3>
            <p className="my-4 mx-0 text-sm lg:text-base">{item.description}</p>
            <h4 className="text-2xl">Price: ${item.price}</h4>
            <div className="flex  cursor-pointer mb-8 mt-8 space-x-4">
              {item.subImg.map((each, idx) => (
                <div
                  className="w-[50px] lg:w-[80px] h-[50px] lg:h-[80px]"
                  key={idx}
                >
                  <img
                    src={each}
                    alt="productPix"
                    className="w-full h-full  hover:border-blue-500 cursor-pointer transition-all ease-linear duration-500 border-2 border-gray-300 rounded p-4"
                    onMouseOver={handleImg}
                    onClick={handleClick}
                  />
                </div>
              ))}

              <div className="space-x-8">
                {item.inStock ? (
                  <span className="text-blue-800 inline-block uppercase px-8 py4 bg-blue-100 border-2 rounded">
                    Instock
                  </span>
                ) : (
                  <span className="text-red-500 inline-block uppercase px-8 py4 bg-red-100 border-2 rounded">
                    Out Of Stock
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center lg:flex-row flex-col">
              <Link to="/" className="flex-shrink">
                <button className="focus:outline-none transition-colors ease-linear duration-500  py-3 px-8 uppercase hover:bg-red-700 bg-red-500 text-white outline-none rounded">
                  Back to product
                </button>
              </Link>
              <button
                className="mr-8 ml-8 text-2xl outline-none border-0 focus:outline-none"
                disabled={item.quantity === 1}
                onClick={() => decrement(item.id, "single")}
              >
                -
              </button>
              <input
                value={item.quantity}
                type="number"
                inputMode="numeric"
                className="number-Input rounded outline-none py-2 border-gray-700 border pl-7"
                min={1}
                max={8}
                disabled
                onChange={(e) =>
                  productInputChange(item.id, e.target.value, "single")
                }
              />
              <button
                className="ml-8 mr-8 text-2xl outline-none border-0 focus:outline-none"
                disabled={item.quantity === 9}
                onClick={() => increment(item.id, "single")}
              >
                +
              </button>
              <button
                onClick={() => {
                  if (item.quantity === "" || item.quantity < 1) return;

                  addToCart(item.id, "single");
                }}
                className="flex-shrink py-3 px-8 uppercase ml-0 lg:ml-6 transition-colors ease-linear duration-500 hover:bg-blue-700 bg-blue-500 text-white outline-none focus:outline-none  rounded"
              >
                {item.inCart ? "InCart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
        <div className=" flex  justify-center flex-wrap mt-20 ">
          <div className="px-100 flex-1">
            <h2 className="text-center text-2xl font-normal text-gray-500 pt-8 pb-4 uppercase ">
              Full <span className="text-blue-400 ">specification</span>
            </h2>
            <div className="border-b-5   bg-blue-400 w-24 mx-auto h-4 mb-8 rounded" />
            <div className="relative overflow-x-auto ">
              <table className="w-full mx-0 lg:w-3/4 lg:mx-auto text-sm text-left ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product Info
                    </th>
                    <th scope="col" className="pl-40 py-3">
                      Desc
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      Os:
                    </th>
                    <td className="pl-40 py-3">{item.Details.Os}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      Ram:
                    </th>
                    <td className="pl-40 py-3">{item.Details.Ram}</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      Weight
                    </th>

                    <td className="pl-40 py-3">{item.Details.Weight}</td>
                  </tr>

                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      Dimentions
                    </th>

                    <td className="pl-40 py-3">{item.Details.Dimensions}</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      Batteries
                    </th>

                    <td className="pl-40 py-3">{item.Details.Batteries}</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      Model Number:
                    </td>
                    <td className="pl-40 py-3">{item.Details.Modelnumber}</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      Wireless :
                    </td>
                    <td className="pl-40 py-3">{item.Details.Wireless}</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      Connectivity:
                    </td>
                    <td className="pl-40 py-3">{item.Details.Connectivity}</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      GPS
                    </td>
                    <td className="pl-40 py-3">{item.Details.GPS}</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      SpecialFeature
                    </td>
                    <td className="pl-40 py-3">
                      {item.Details.Specialfeatures}
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      Display
                    </td>
                    <td className="pl-40 py-3">{item.Details.Display}</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      Resolution
                    </td>
                    <td className="pl-40 py-3">{item.Details.Resolution}</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      Color
                    </td>
                    <td className="pl-40 py-3">{item.Details.Color}</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      Talk-Time
                    </td>
                    <td className="pl-40 py-3">{item.Details.TalkTime}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className=" px-100 flex-1">
            <h2 className="text-center  text-2xl font-normal text-gray-500 pt-8 pb-4 uppercase ">
              Related <span className="text-blue-400 ">Products</span>
            </h2>
            <div className="border-b-5   bg-blue-400 w-20 mx-auto h-4 mb-8 rounded" />

            <RelatedProducts
              item={latest}
              modalFile={modalFile}
              addToCart={addToCart}
              setOpenModal={setOpenModal}
              setLight={setLight}
            />
          </div>
        </div>
        <ModalWrapper
          isOpen={openModal}
          setOpenModal={setOpenModal}
          modalData={item}
          light={light}
        />
      </section>
      <Footer />
    </>
  );
}

export default ProductDetails;
