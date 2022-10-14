import React, { useState, useEffect } from "react";
import avater from "/ecoms/images/avatar.jpg";
import * as Icons from "react-bootstrap-icons";
import { userRow } from "../../utils/UserData";
import { Link, useParams } from "react-router-dom";

export default function UserEdit() {
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
  });
  const [userDisplay, setUserDisplay] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    transaction: "",
    status: "",
    img: "",
    gender: "",
    occupation: "",
    address: "",
  });

  const [passwordData, setPasswordData] = useState({
    password: "",
    password1: "",
  });

  const { id } = useParams();

  useEffect(() => {
    //api call for single user data
    const getUser = () => {
      const userForEdit = userRow.find((each) => each.id.toString() === id);
      setFormData(userForEdit);
      setUserDisplay(userForEdit);
    };
    getUser();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleChangePassword = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    //api call
    setFormData(formData);
    setUserDisplay(formData);
    alert("update was successful");
  };
  const handleSubmitPassword = (e) => {
    e.preventDefault();
    if (passwordData.password === passwordData.password1) {
      //api call
      return setPasswordData({ ...passwordData, password1: "", password: "" });
    }
    return alert("Password must match");
  };

  return (
    <div className="w-full h-auto lg:h-screen  dark:bg-black ">
      <div className="flex  justify-between items-center mx-4 mt-8 mb-4">
        <h1 className="dark:text-white text-gray-800  font-extrabold text-3xl    uppercase">
          Edit User
        </h1>
        <Link to="/admin/users">
          <button className=" py-2 px-4 bg-green-400 text-white  rounded-lg">
            Users
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
                  Account Details
                </h4>
                <p className="text-gray-400 text-md gap-2 items-center flex  capitalize ">
                  <Icons.PersonFill size={20} /> {userDisplay?.firstname}{" "}
                  {userDisplay?.lastname}
                </p>
                <p className="text-gray-400 text-md gap-2 items-center flex  capitalize ">
                  <Icons.CurrencyDollar size={20} />{" "}
                  {userDisplay?.transaction || "0000"}
                </p>
                <p className="text-gray-400 text-md gap-2 items-center flex  capitalize ">
                  <Icons.Info size={20} /> {userDisplay?.status}
                </p>
                <h4 className="font-bold text-xl text-blue-500">
                  Contact Information
                </h4>
                <p className="text-gray-400 text-md gap-2 items-center flex  capitalize ">
                  <Icons.Envelope /> {userDisplay?.email}
                </p>

                <p className="text-gray-400 text-md gap-2 items-center flex  capitalize ">
                  <Icons.Telephone /> {userDisplay?.phone}
                </p>
                <p className="text-gray-400 text-md gap-2 items-center flex  capitalize ">
                  <Icons.GeoFill /> {userDisplay.address}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-blue-500 mt-4 mb-4 text-xl text-center">
              Update User Profile information
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
                  <div className="mt-4 w-[100%] lg:w-[35%] lg:hidden block ">
                    <button className="bg-blue-500 py-3 w-full rounded-lg text-white">
                      Update
                    </button>
                  </div>
                </form>
                <form onSubmit={handleSubmitPassword}>
                  <h4 className="text-blue-500 my-4 text-lg text-center font-bold">
                    Update Password
                  </h4>
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
                        value={passwordData.password}
                        onChange={handleChangePassword}
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
                        value={passwordData.password1}
                        onChange={handleChangePassword}
                        className="py-3 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                      />
                    </div>
                  </div>
                  <div className="mt-4 w-full lg:w-[35%]">
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
