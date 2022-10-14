import React, { useState, useEffect } from "react";
import avater from "/ecoms/images/avatar.jpg";
import * as Icons from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import { mobileData } from "../../../New-Project/products/tempFile/TestFile";

export default function ProductEdit() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    inStock: "",
    img: "",
    description: "",
  });
  const [userDisplay, setUserDisplay] = useState({
    name: "",
    category: "",
    price: "",
    inStock: "",
    img: "",
    description: "",
  });

  const { id } = useParams();

  useEffect(() => {
    //api call for single user data
    const getUser = () => {
      const userForEdit = mobileData.find((each) => each.id.toString() === id);
      setFormData(userForEdit);
      setUserDisplay(userForEdit);
    };
    getUser();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //api call
    setFormData(formData);
    setUserDisplay(formData);
    alert("update was successful");
  };

  return (
    <div className="w-full h-auto lg:h-screen  dark:bg-black ">
      <div className="flex  justify-between items-center mx-4 mt-8 mb-4">
        <h1 className="dark:text-white text-gray-800  font-extrabold text-3xl    uppercase">
          Edit Product
        </h1>
        <Link to="/admin/products">
          <button className=" py-2 px-4 bg-green-400 text-white  rounded-lg">
            Products
          </button>
        </Link>
      </div>
      <div className="mx-4  mt-10 bg-gray-50 rounded-lg dark:bg-gray-800">
        <div className="flex justify-around gap-4 lg:flex-row flex-col ">
          <div className="flex flex-col gap-4 mt-4 flex-1  p-4 shadow-lg">
            <div className=" flex gap-4 items-center">
              <img
                src={userDisplay?.img || avater}
                className=" rounded-full h-[45px] w-[45px] object-cover"
              />
              <div className="flex gap-1 font-bold flex-col ">
                <div className="flex  gap-2 dark:text-white">
                  <span>{userDisplay.firstname}</span>
                  <span>{userDisplay.lastname}</span>
                </div>
                <span className="text-gray-400 ">{userDisplay.occupation}</span>
              </div>
            </div>

            <div className=" flex  gap-4">
              <div className="flex flex-col gap-4 justify-start">
                <h4 className="font-bold text-xl text-blue-500">
                  Product Details
                </h4>
                <p className="text-gray-400 text-md gap-2 items-center flex  capitalize ">
                  <Icons.CardList size={20} /> {userDisplay?.firstname}{" "}
                  {userDisplay?.name}
                </p>
                <p className="text-gray-400 text-md gap-2 items-center flex  capitalize ">
                  <Icons.CurrencyDollar size={20} />{" "}
                  {userDisplay?.price || "0000"}
                </p>

                <p className="text-gray-400 text-md gap-2 items-center flex  capitalize ">
                  <Icons.Bag /> {userDisplay?.inStock ? "Yes" : "No"}
                </p>

                <p className="text-gray-400 text-md gap-2 items-center flex  capitalize ">
                  <Icons.Clipboard2Data /> {userDisplay?.category}
                </p>
                <p className="text-gray-400 text-md gap-2 items-center flex  capitalize ">
                  <Icons.Info size={20} />{" "}
                  {userDisplay?.description.slice(1, 50)}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-blue-500 mt-4 mb-4 text-xl text-left">
              Update This Product
            </h4>
            <div className=" mt-4 p-4 flex-[2] shadow-lg flex  ">
              <div className="flex-[2]">
                <div className="flex justify-center lg:hidden  gap-4">
                  <label htmlFor="upload" className="cursor-pointer">
                    <img
                      src={userDisplay.img}
                      alt="profile"
                      className="w-[300px] h-[300px] rounded-lg"
                    />
                  </label>
                  <input
                    type="file"
                    id="upload"
                    name="img"
                    className="hidden"
                    onChange={handleChange}
                  />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="w-full flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4 ">
                    <div className="w-full ">
                      <label htmlFor="name" className="py-3  text-gray-500">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData?.name}
                        onChange={handleChange}
                        className="py-3 px-4 outline-none focus:border-blue-400 focus:outline-none duration-500 bg-gray-100 rounded border-2  w-full transition-all ease-linear border-gray-400 hover:border-blue-400"
                      />
                    </div>
                    <div className="w-full ">
                      <label
                        htmlFor="price"
                        className="py-3 text-lg text-gray-500 "
                      >
                        Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        required
                        id="price"
                        value={formData?.price}
                        onChange={handleChange}
                        className="py-3 px-4 outline-none focus:border-blue-400 focus:outline-none bg-gray-100 rounded border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full "
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4">
                    <div className="w-full ">
                      <label
                        htmlFor="inStock"
                        className="py-2 text-lg text-gray-500"
                      >
                        InStock
                      </label>
                      <select
                        name="inStock"
                        id="inStock"
                        required
                        value={formData?.inStock}
                        onChange={handleChange}
                        className="py-3 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div className="w-full ">
                      <label
                        htmlFor="category"
                        className="py-2 text-lg text-gray-500"
                      >
                        Category
                      </label>
                      <select
                        name="category"
                        id="category"
                        required
                        value={formData?.category}
                        onChange={handleChange}
                        className="py-3 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                      >
                        <option value="cheapest">Chepest</option>
                        <option value="latest">Latest</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4 ">
                    <div className="w-full ">
                      <label
                        htmlFor="description"
                        className="py-3 text-lg text-gray-500"
                      >
                        Description
                      </label>
                      <textarea
                        multiple
                        cols={4}
                        rows={4}
                        name="description"
                        id="description"
                        value={formData?.description.slice(1, 80)}
                        onChange={handleChange}
                        className="py-3 h-[20%] overflow-hidden px-4 outline-none focus:border-blue-400 focus:outline-none rounded duration-500 bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full "
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-4 w-[100%] lg:w-[35%] lg:hidden block ">
                    <button className="bg-blue-500 py-3 w-full rounded-lg text-white">
                      Update
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex-1 hidden lg:flex mt-6 flex-col items-end gap-[45%] lg:gap-24">
                <div className="flex items-center  gap-4">
                  <img
                    src={userDisplay.img}
                    alt="profile"
                    className="w-[100px] h-[100px] rounded-lg"
                  />
                  <label
                    htmlFor="upload"
                    className="cursor-pointer dark:text-gray-300"
                  >
                    <Icons.Upload size={25} />
                  </label>
                  <input
                    type="file"
                    id="upload"
                    name="img"
                    className="hidden"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4 w-[90%] lg:w-[60%]" onClick={handleSubmit}>
                  <button className="bg-blue-500 py-3 w-full rounded-lg text-white">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
