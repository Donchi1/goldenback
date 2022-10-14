import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    status: "",
    img: "",
    transactions: "",
    gender: "",
    occupation: "",
    address: "",
    password: "",
    password1: "",
    isSubmitting: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, isSubmitting: true });
    //api call
    const { isSubmitting, ...others } = formData;
    localStorage.setItem("user", JSON.stringify({ ...others }));
    setFormData({
      ...formData,
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      status: "",
      img: "",
      transactions: "",
      gender: "",
      occupation: "",
      address: "",
      password: "",
      password1: "",
      isSubmitting: false,
    });
    navigate("/auth/login");
  };

  return (
    <div className="w-full h-auto lg:h-screen  dark:bg-black ">
      <div className="mx-4  flex justify-center items-center h-full ">
        <div className="shadow-lg bg-gray-50 w-full lg:w-[50%] mx-auto  rounded-lg dark:bg-gray-800">
          <div className="text-3xl ml-4 mt-8 text-center uppercase font-extrabold  lg:ml-0 pt-4 text-gray-500">
            <span>Registeration</span>
          </div>
          <p className="text-center text-blue-600 py-1">
            Register a new account
          </p>
          <div className="flex justify-around gap-4 lg:flex-row flex-col ">
            <div>
              <div className=" mt-4 p-4  flex  ">
                <div className="">
                  <form onSubmit={handleSubmit}>
                    <div className="w-full flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4 ">
                      <div className="w-full ">
                        <label htmlFor="fname" className="py-3  text-gray-500">
                          Firstname
                        </label>
                        <input
                          type="text"
                          name="firstname"
                          id="fname"
                          required
                          value={formData?.firstname}
                          onChange={handleChange}
                          className="py-3 px-4 outline-none focus:border-blue-400 focus:outline-none duration-500 bg-gray-100 rounded border-2  w-full transition-all ease-linear border-gray-400 hover:border-blue-400"
                        />
                      </div>
                      <div className="w-full ">
                        <label
                          htmlFor="lname"
                          className="py-3 text-lg text-gray-500 "
                        >
                          Lastname
                        </label>
                        <input
                          type="text"
                          name="lastname"
                          required
                          id="lname"
                          value={formData?.lastname}
                          onChange={handleChange}
                          className="py-3 px-4 outline-none focus:border-blue-400 focus:outline-none bg-gray-100 rounded border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full "
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4">
                      <div className="w-full ">
                        <label
                          htmlFor="phone"
                          className="py-3 text-lg text-gray-500"
                        >
                          Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          value={formData?.phone}
                          onChange={handleChange}
                          className="py-3 px-4 outline-none focus:border-blue-400 focus:outline-none rounded duration-500 bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full "
                        />
                      </div>
                      <div className="w-full ">
                        <label
                          htmlFor="email"
                          className="py-2 text-lg text-gray-500"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData?.email}
                          onChange={handleChange}
                          className="py-3 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4 ">
                      <div className="w-full ">
                        <label
                          htmlFor="address"
                          className="py-3 text-lg text-gray-500"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          required
                          value={formData?.address}
                          onChange={handleChange}
                          className="py-3 px-4 outline-none focus:border-blue-400 focus:outline-none rounded duration-500 bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full "
                        />
                      </div>
                      <div className="w-full ">
                        <label
                          htmlFor="occupation"
                          className="py-2 text-lg text-gray-500"
                        >
                          Occupation
                        </label>
                        <input
                          type="text"
                          name="occupation"
                          id="ocupation"
                          required
                          value={formData?.occupation}
                          onChange={handleChange}
                          className="py-3 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                        />
                      </div>
                    </div>
                    <div className="w-full ">
                      <label
                        htmlFor="img"
                        className="py-2 text-lg text-gray-500"
                      >
                        Picture
                      </label>
                      <input
                        type="file"
                        name="img"
                        id="img"
                        required
                        value={formData?.img}
                        onChange={handleChange}
                        className="py-3 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                      />
                    </div>
                    <label className="py-2 text-lg text-gray-500">Gender</label>
                    <div className="w-full flex items-center gap-2 ">
                      <label className="dark:text-gray-300">Male</label>
                      <input
                        type="radio"
                        name="male"
                        id="male"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }
                        className="py-3  duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 "
                      />
                      <label className="dark:text-gray-300">Female</label>
                      <input
                        type="radio"
                        name="female"
                        id="female"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }
                        className="py-3 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 "
                      />
                      <label className="dark:text-gray-300">Others</label>
                      <input
                        type="radio"
                        name="others"
                        id="others"
                        value="Others"
                        checked={formData.gender === "Others"}
                        onChange={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }
                        className="py-3 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 "
                      />
                    </div>

                    <div className="w-full flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4 ">
                      <div className="w-full ">
                        <label
                          htmlFor="password"
                          className="py-3 text-lg text-gray-500"
                        >
                          New Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          required
                          value={formData.password}
                          onChange={handleChange}
                          className="py-3 px-4 outline-none focus:border-blue-400 focus:outline-none rounded duration-500 bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full "
                        />
                      </div>
                      <div className="w-full ">
                        <label
                          htmlFor="password1"
                          className="py-2 text-lg text-gray-500"
                        >
                          Repeat-Password
                        </label>
                        <input
                          type="password"
                          name="password1"
                          id="password1"
                          required
                          value={formData.password1}
                          onChange={handleChange}
                          className="py-3
                         duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                        />
                      </div>
                    </div>
                    <div className="mt-4 w-full lg:w-[35%]">
                      <button
                        type="submit"
                        disabled={formData.isSubmitting}
                        className=" bg-blue-500 py-3 w-full rounded-lg text-white"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
