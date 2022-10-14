import React, { useState, useContext } from "react";
import Title from "../components/Title";
import Footer from "../components/Footer";
import avater from "/ecoms/images/avatar.jpg";
import * as Icons from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    phone: user.phone,
    password: "",
  });
  const [passwordData, setPasswordData] = useState({
    password: "",
    password1: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleChangePassword = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //api call
    let myUser = JSON.parse(localStorage.getItem("user"));

    myUser = formData;
    localStorage.setItem("user", JSON.stringify(myUser));
    alert("update success");
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
    <>
      <Title text={"Profile"} />
      <div className="mx-8 shadow-lg">
        <div className="flex justify-around items-center ">
          <div className="flex flex-col gap-4 mt-4  p-4">
            <div className="w-[300px]">
              <img src={avater} className="w-full rounded-full" />
            </div>
            <div className="text-left">
              <p className="text-blue-500 text-md gap-2 items-center flex font-bold capitalize ">
                <Icons.PersonFill /> {formData.firstname} {formData.lastname}
              </p>
              <p className="text-blue-500 gap-2 items-center flex text-md font-bold  ">
                <Icons.Envelope /> {formData.email}
              </p>
              <p className="text-blue-500 gap-2 items-center flex text-md font-bold capitalize ">
                <Icons.Telephone /> {formData.phone}
              </p>
            </div>
            <button
              onClick={() => logout()}
              className="bg-red-500 py-4  text-white uppercase text-lg outline-none border-none rounded-lg"
            >
              Log out
            </button>
          </div>
          <div className=" mt-4 p-4">
            <form onSubmit={handleSubmit}>
              <h4 className="font-bold text-blue-500 mb-4 text-xl text-center">
                Update Your Profile information
              </h4>
              <div className="w-full flex items-center space-x-4 ">
                <div className="w-full ">
                  <label htmlFor="fname" className="py-4  text-gray-500">
                    Firstname
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="fname"
                    required
                    value={formData.firstname}
                    onChange={handleChange}
                    className="py-4 px-4 outline-none focus:border-blue-400 focus:outline-none duration-500 bg-gray-100 rounded border-2  w-full transition-all ease-linear border-gray-400 hover:border-blue-400"
                  />
                </div>
                <div className="w-full ">
                  <label
                    htmlFor="lname"
                    className="py-4 text-lg text-gray-500 "
                  >
                    Lastname
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    required
                    id="lname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="py-4 px-4 outline-none focus:border-blue-400 focus:outline-none bg-gray-100 rounded border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full "
                  />
                </div>
              </div>
              <div className="w-full flex items-center space-x-4 ">
                <div className="w-full ">
                  <label htmlFor="phone" className="py-4 text-lg text-gray-500">
                    Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="py-4 px-4 outline-none focus:border-blue-400 focus:outline-none rounded duration-500 bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full "
                  />
                </div>
                <div className="w-full ">
                  <label htmlFor="email" className="py-2 text-lg text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                  />
                </div>
              </div>
              <div className="mt-4">
                <button className="bg-blue-500 py-3 px-6 rounded-lg text-white">
                  Update
                </button>
              </div>
            </form>
            <form onSubmit={handleSubmitPassword}>
              <h4 className="text-blue-500 my-4 text-lg text-center font-bold">
                Update Password
              </h4>
              <div className="w-full flex items-center space-x-4 ">
                <div className="w-full ">
                  <label
                    htmlFor="password"
                    className="py-4 text-lg text-gray-500"
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
                    className="py-4 px-4 outline-none focus:border-blue-400 focus:outline-none rounded duration-500 bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full "
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
                    className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                  />
                </div>
              </div>
              <div className="mt-4">
                <button className="bg-blue-500 py-3 px-6 rounded-lg text-white">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
