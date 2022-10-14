import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-bootstrap-icons";
import { goldenContext } from "../context/GoldenProvider";

const Footer = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [subscribe, setSubscribe] = useState("");

  const [openSnack, setopenSnack] = useState({
    contactSuccess: false,
    contactError: false,
    subscribeSuccess: false,
    subscribeError: false,
  });

  const requiredOption = {
    title: "Error",
    text: "All field Required",
    showCloseButton: true,
    icon: "error",
    timer: 6000,
  };
  const emailOption = {
    title: "Error",
    text: "Not a Valid email address",
    showCloseButton: true,
    icon: "error",
    timer: 6000,
  };
  const handleChange = (e) => {
    setFormData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((userData.email, userData.message, userData.subject, userData.name)) {
      if (userData.email.includes("@")) {
      }
    }
  };
  const handleSsubmit = () => {
    if (subscribe) {
      if (subscribe.includes("@")) {
      }
    }
  };

  const { buttonRef, scrollRef } = useContext(goldenContext);

  return (
    <>
      <footer className="relative">
        {/* ##### Contact Area Start ##### */}

        <div>
          <div className="bg-white container mx-auto">
            <div className="flex flex-wrap ">
              <div className="w-full">
                <div className="section-heading bg-white text-center">
                  <h2 className="text-center  text-2xl font-normal text-gray-500 pt-8 pb-4 uppercase ">
                    Contact <span className="text-blue-400 ">Us</span>
                  </h2>
                  <div className="border-b-5   bg-blue-400 w-24 mx-auto h-4 mb-8 rounded" />
                  <p className="text-lg mb-4">
                    Contact us for any information, confusions or issues. Our
                    client satisfaction is our most priority.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex items-center flex-col lg:flex-row">
              <div>
                <img
                  src="/ecoms/images/articles/macbook-promo-2.jpg"
                  alt="product"
                  className="bg-cover object-cover bg-center "
                />
              </div>
              <div className="w-full md:w-4/5 pr-4 pl-4 lg:w-2/3 ">
                <div className="contact_form">
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap ">
                      <div className="w-full">
                        <div id="success_fail_info"></div>
                      </div>

                      <div className="w-full ">
                        <label
                          htmlFor="name"
                          className="py-2 text-lg text-gray-500"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={userData.name}
                          className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                          onChange={(e) =>
                            setuserData({ ...userData, name: e.target.value })
                          }
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
                          value={userData.email}
                          onChange={handleChange}
                          className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                        />
                      </div>
                      <div className="w-full ">
                        <label
                          htmlFor="subject"
                          className="py-2 text-lg text-gray-500"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          required
                          value={userData.email}
                          onChange={handleChange}
                          className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                        />
                      </div>
                      <div className="w-full ">
                        <label
                          htmlFor="email"
                          className="py-2 text-lg text-gray-500"
                        >
                          Email
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          required
                          value={userData.message}
                          onChange={handleChange}
                          className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                        ></textarea>
                      </div>

                      <div
                        className="w-full text-center fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <button
                          type="submit"
                          className=" mt-2 py-4 w-full text-lg uppercase bg-blue-500 text-white focus:outline-none outline-none rounded-lg"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Contact Area End ##### */}

        <div className=" bg-black  text-white mt-8 ">
          <div className="container mx-auto">
            <div className="flex justify-between py-8 flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 pr-4 pl-4 md:w-1/2 ">
                <div className="footer-copywrite-info">
                  {/* Copywrite */}
                  <div
                    className="copywrite_text fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="footer-logo">
                      <Link to="/" className="text-3xl font-bold text-blue-600">
                        Golden Store{" "}
                      </Link>
                    </div>
                    <p className="mt-4">
                      Start with us and make the best of buying and selling with
                      ease.We are one stable and reliable platform for your
                      buying and selling.
                    </p>
                  </div>
                  {/* Social Icon */}
                  <div className="flex gap-4 mt-8">
                    <Link to="#">
                      <Icons.Facebook
                        size={25}
                        aria-hidden="true"
                      ></Icons.Facebook>
                    </Link>
                    <Link to="#">
                      {" "}
                      <Icons.Twitter
                        size={25}
                        aria-hidden="true"
                      ></Icons.Twitter>
                    </Link>
                    <Link to="#">
                      <Icons.Google size={25} aria-hidden="true"></Icons.Google>
                    </Link>
                    <Link to="#">
                      <Icons.Instagram
                        size={25}
                        className="fa fa-instagram"
                        aria-hidden="true"
                      ></Icons.Instagram>
                    </Link>
                    <Link to="#">
                      <Icons.Linkedin
                        size={25}
                        aria-hidden="true"
                      ></Icons.Linkedin>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/5 pr-4 pl-4 md:w-1/2  ">
                {/* Content Info */}
                <div className=" sm:flex justify-between">
                  <div>
                    <h5 className="text-blue-500 font-bold py-4 ">NAVIGATE</h5>
                    <Link
                      to="/"
                      className="py-1 block hover:text-blue-500 transition-all duration-500 linear"
                    >
                      {" "}
                      <p>Home</p>
                    </Link>
                    <Link
                      to="/about"
                      className="py-1 block hover:text-blue-500 transition-all duration-500 linear"
                    >
                      {" "}
                      <p>About</p>
                    </Link>
                    <Link
                      to="/team"
                      className="py-1 block hover:text-blue-500 transition-all duration-500 linear"
                    >
                      {" "}
                      <p>Team</p>
                    </Link>
                    <Link
                      to="/contact"
                      className="py-1 block hover:text-blue-500 transition-all duration-500 linear"
                    >
                      {" "}
                      <p>Contact</p>
                    </Link>
                    <Link
                      to="/pricing"
                      className="py-1 block hover:text-blue-500 transition-all duration-500 linear"
                    >
                      {" "}
                      <p>Pricing</p>
                    </Link>
                    <Link
                      to="/login"
                      className="py-1 block hover:text-blue-500 transition-all duration-500 linear"
                    >
                      {" "}
                      <p>login</p>
                    </Link>
                    <Link
                      to="/register"
                      className="py-1 block hover:text-blue-500 transition-all duration-500 linear"
                    >
                      {" "}
                      <p>Register</p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/4 pr-4 pl-4 md:w-1/2  ">
                <div className="">
                  {/* Content Info */}
                  <div
                    className="contact_info mt-s text-left lg:fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <h5 className="text-blue-500 font-bold py-4 ">
                      CONTACT US
                    </h5>
                    <p>Address:No 345 Street</p>
                    <p>Bristol England United Kingdom</p>
                    <p>
                      Whatsapp:{" "}
                      <a href="https://wa.me/+971558271567">+971558271567</a>
                    </p>
                    <p>
                      Whatsapp:{" "}
                      <a href="https://wa.me/+12046022485">+12046022485</a>{" "}
                    </p>
                    <p>support@golden.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={buttonRef}
          onClick={() =>
            scrollRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-blue-500 hidden cursor-pointer rounded-full hover:opacity-8 transition-all ease-linear duration-700 text-white fixed right-8 z-[1111] top-[90%]"
        >
          <div className="p-2">
            <Icons.ArrowUp size={30} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
