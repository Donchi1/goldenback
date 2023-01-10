import React, { useEffect } from "react";
import { useState } from "react";
import Title from "../components/Title";
import * as Icons from "react-bootstrap-icons";
import PayPal from "../components/Paypal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Stripe from "../components/Stripe";
import Footer from "../components/Footer";
import { clearCart } from "../State/cartSlice";
import formatCurrency from "../utils/formatCurrency";

function Checkout() {
  const { products, total } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [shipping, setShipping] = useState({
    method: "Pick Up From Store",
    onlinePayment: true,
    paymentMethod: "online by card",
    electronic: false,
    cash: false,
    openRegion: false,
    openCity: false,
    openStore: false,
  });

  const [regionDelivery, setRegionDelivery] = useState({
    street: "",
    house: "",
    floor: "",
    building: "",
    city: "",
    postalcode: "",
    comment: "",

    appartment: "",
    country: "",
  });
  const [contactInformation, setContactInformation] = useState({
    email: "",
    phone: "",
    firstname: "",
    lastname: "",
  });
  const [cityDelivery, setCityDelivery] = useState({
    street: "",
    house: "",
    floor: "",
    building: "",
    postalcode: "",
    comment: "",

    appartment: "",
  });

  useEffect(() => {
    const getUser = () => {
      setContactInformation({
        ...contactInformation,
        email: user.email,
        phone: user.phone,
        firstname: user.firstname,
        lastname: user.lastname,
      });
    };
    getUser();
  }, [user]);

  const handleContact = (e) => {
    setContactInformation({
      ...contactInformation,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegion = (e) => {
    setRegionDelivery({ ...regionDelivery, [e.target.name]: e.target.value });
  };
  const handleCity = (e) => {
    setCityDelivery({ ...cityDelivery, [e.target.name]: e.target.value });
  };
  const sumSingle = (id) => {
    const item = products.find((each) => each._id === id);
    const total = item.price * item.quantity;

    return formatCurrency(total);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Title text="Checkout" />
      <div className="container mx-auto pb-16">
        <form onSubmit={handleSubmit}>
          <div className="text-2xl ml-4 lg:ml-0 py-8 text-gray-500">
            <span>1.</span> <span>Contact Information</span>
          </div>
          <div className=" h-full items-center px-8 py-8 mx-auto bg-white shadow-lg ">
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8">
              <div className="w-full ">
                <label htmlFor="fname" className="py-4  text-gray-500">
                  Firstname
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="fname"
                  required
                  value={contactInformation?.firstname}
                  onChange={handleContact}
                  className="py-4 px-4 outline-none focus:border-blue-400 focus:outline-none duration-500 bg-gray-100 rounded border-2  w-full transition-all ease-linear border-gray-400 hover:border-blue-400"
                />
              </div>
              <div className="w-full ">
                <label htmlFor="lname" className="py-4 text-lg text-gray-500 ">
                  Lastname
                </label>
                <input
                  type="text"
                  name="lastname"
                  required
                  id="lname"
                  value={contactInformation?.lastname}
                  onChange={handleContact}
                  className="py-4 px-4 outline-none focus:border-blue-400 focus:outline-none bg-gray-100 rounded border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full "
                />
              </div>
              <div className="w-full ">
                <label htmlFor="phone" className="py-4 text-lg text-gray-500">
                  Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={contactInformation?.phone}
                  onChange={handleContact}
                  className="py-4 px-4 outline-none focus:border-blue-400 focus:outline-none rounded duration-500 bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full "
                />
              </div>
              <div className="w-full ">
                <label htmlFor="email" className="py-4 text-lg text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={contactInformation?.email}
                  onChange={handleContact}
                  className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                />
              </div>
            </div>
          </div>
          <div className="text-2xl ml-4 lg:ml-0 py-8 text-gray-500">
            <span>2.</span> <span>Shipping</span>
          </div>
          <div className=" h-full items-center px-8 py-8 mx-auto bg-white shadow-lg ">
            <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-8">
              <div
                onClick={() =>
                  setShipping({
                    ...shipping,
                    method: "Pick Up From Store",

                    openStore: true,
                    openCity: false,
                    openRegion: false,
                  })
                }
                className={` ${
                  shipping.openStore && "border-blue-400"
                } w-full cursor-pointer transition-all ease-linear duration-500 border-grey-400 rounded-md group hover:border-blue-400 text-center border-2 py-12 px-4`}
              >
                <div className="mb-2 flex justify-center items-center">
                  <div
                    className={` ${
                      shipping.openStore && "bg-blue-400 "
                    }group-hover:border-blue-400 rounded-full w-7 h-7 border-2 border-grey-400`}
                  ></div>
                </div>
                <h2 className="text-xl font-medium uppercase text-gray-500">
                  Pick Up From Store
                </h2>
                <p>Free tomorrow</p>
              </div>

              <div
                onClick={() =>
                  setShipping({
                    ...shipping,
                    method: "Deliver in City",

                    openCity: true,
                    openRegion: false,
                    openStore: false,
                  })
                }
                className={` ${
                  shipping.openCity && "border-blue-400"
                } w-full cursor-pointer transition-all ease-linear duration-500 border-grey-400 rounded-md group hover:border-blue-400 text-center border-2 py-12 px-4`}
              >
                <div className="mb-2 flex items-center justify-center">
                  <div
                    className={` ${
                      shipping.openCity && "bg-blue-400 "
                    }group-hover:border-blue-400 text-center rounded-full w-7 h-7 border-2 border-grey-400`}
                  ></div>
                </div>
                <h2 className="text-xl font-medium uppercase text-gray-500">
                  Deliver in city
                </h2>
                <p>Free tomorrow</p>
              </div>

              <div
                onClick={() =>
                  setShipping({
                    ...shipping,
                    method: "Regional Delivery",

                    openRegion: true,
                    openCity: false,
                    openStore: false,
                  })
                }
                className={` ${
                  shipping.openRegion && "border-blue-400"
                } w-full cursor-pointer transition-all ease-linear duration-500 border-grey-400 rounded-md group hover:border-blue-400 text-center border-2 py-12 px-4`}
              >
                <div className="mb-2 flex justify-center items-center">
                  <div
                    className={` ${
                      shipping.openRegion && "bg-blue-400 "
                    }group-hover:border-blue-400 rounded-full w-7 h-7  border-2 border-grey-400`}
                  ></div>
                </div>
                <h2 className="text-xl font-medium uppercase text-gray-500">
                  Regional Delivery
                </h2>
                <p>Via Donchi delivery service to any country.</p>
              </div>
            </div>
            {shipping.openRegion && (
              <div className="grid mt-8 transition-all ease-linear duration-500  grid-cols-2 lg:grid-cols-1 place-items-center gap-8">
                <div className="w-full ">
                  <label htmlFor="country" className="py-4  text-gray-500">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    required
                    value={regionDelivery.country}
                    onChange={handleRegion}
                    className="py-4 px-4 outline-none focus:border-blue-400 focus:outline-none duration-500 bg-gray-100 rounded border-2  w-full transition-all ease-linear border-gray-400 hover:border-blue-400"
                  />
                </div>
                <div className="w-full ">
                  <label htmlFor="city" className="py-4 text-lg text-gray-500 ">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    id="city"
                    value={regionDelivery.city}
                    onChange={handleRegion}
                    className="py-4 px-4 outline-none focus:border-blue-400 focus:outline-none bg-gray-100 rounded border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full "
                  />
                </div>

                <div className="w-full ">
                  <label
                    htmlFor="street"
                    className="py-4 text-lg text-gray-500"
                  >
                    Street
                  </label>
                  <input
                    type="text"
                    name="street"
                    id="street"
                    required
                    value={regionDelivery.street}
                    onChange={handleRegion}
                    className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                  />
                </div>
                <div className="w-full ">
                  <label htmlFor="code" className="py-4 text-lg text-gray-500">
                    Postal Code
                  </label>
                  <input
                    type="tel"
                    name="postalcode"
                    id="code"
                    required
                    value={regionDelivery.postalcode}
                    onChange={handleRegion}
                    className="py-4 px-4 outline-none focus:border-blue-400 focus:outline-none rounded duration-500 bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full "
                  />
                </div>
                <div className="w-full row-span-1 ">
                  <label htmlFor="house" className="py-4 text-lg text-gray-500">
                    House
                  </label>
                  <input
                    type="text"
                    name="house"
                    id="house"
                    required
                    value={regionDelivery.house}
                    onChange={handleRegion}
                    className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                  />
                </div>
                <div className="w-full ">
                  <label
                    htmlFor="building"
                    className="py-4 text-lg text-gray-500"
                  >
                    Building
                  </label>
                  <input
                    type="text"
                    name="building"
                    id="building"
                    required
                    value={regionDelivery.building}
                    onChange={handleRegion}
                    className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                  />
                </div>
                <div className="w-full col-span-1 ">
                  <label htmlFor="floor" className="py-4 text-lg text-gray-500">
                    Floor
                  </label>
                  <input
                    type="text"
                    name="floor"
                    id="floor"
                    required
                    value={regionDelivery.floor}
                    onChange={handleRegion}
                    className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                  />
                </div>
                <div className="w-full ">
                  <label
                    htmlFor="apartment"
                    className="py-4 text-lg text-gray-500"
                  >
                    Apartment
                  </label>
                  <input
                    type="text"
                    name="appartment"
                    id="apartment"
                    required
                    value={regionDelivery.appartment}
                    onChange={handleRegion}
                    className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                  />
                </div>
                <div className="w-full col-span-2">
                  <label
                    htmlFor="comment"
                    className="py-4 text-lg text-gray-500"
                  >
                    Comment
                  </label>
                  <textarea
                    type="text"
                    name="comment"
                    id="comment"
                    placeholder="Addition Information: phone number or door phone code"
                    required
                    value={regionDelivery.comment}
                    onChange={handleRegion}
                    className="resize-none h-32 py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                  ></textarea>
                </div>
              </div>
            )}
            {shipping.openCity && (
              <div className="grid mt-8 transition-all ease-linear duration-500  grid-cols-2 lg:grid-cols-1 place-items-center gap-8">
                <div className="w-full ">
                  <label
                    htmlFor="street"
                    className="py-4 text-lg text-gray-500"
                  >
                    Street
                  </label>
                  <input
                    type="text"
                    name="street"
                    id="street"
                    required
                    value={cityDelivery.street}
                    onChange={handleCity}
                    className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                  />
                </div>
                <div className="w-full ">
                  <label htmlFor="code" className="py-4 text-lg text-gray-500">
                    Postal Code
                  </label>
                  <input
                    type="tel"
                    name="postalcode"
                    id="code"
                    required
                    value={cityDelivery.postalcode}
                    onChange={handleCity}
                    className="py-4 px-4 outline-none focus:border-blue-400 focus:outline-none rounded duration-500 bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full "
                  />
                </div>
                <div className="w-full row-span-1 ">
                  <label htmlFor="house" className="py-4 text-lg text-gray-500">
                    House
                  </label>
                  <input
                    type="text"
                    name="house"
                    id="house"
                    required
                    value={cityDelivery.house}
                    onChange={handleCity}
                    className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                  />
                </div>
                <div className="w-full ">
                  <label
                    htmlFor="building"
                    className="py-4 text-lg text-gray-500"
                  >
                    Building
                  </label>
                  <input
                    type="text"
                    name="building"
                    id="building"
                    required
                    value={cityDelivery.building}
                    onChange={handleCity}
                    className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                  />
                </div>
                <div className="w-full col-span-1 ">
                  <label htmlFor="floor" className="py-4 text-lg text-gray-500">
                    Floor
                  </label>
                  <input
                    type="text"
                    name="floor"
                    id="floor"
                    required
                    value={cityDelivery.floor}
                    onChange={handleCity}
                    className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                  />
                </div>
                <div className="w-full ">
                  <label
                    htmlFor="apartment"
                    className="py-4 text-lg text-gray-500"
                  >
                    Apartment
                  </label>
                  <input
                    type="text"
                    name="appartment"
                    id="apartment"
                    required
                    value={cityDelivery.appartment}
                    onChange={handleCity}
                    className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                  />
                </div>
                <div className="w-full col-span-2">
                  <label
                    htmlFor="comment"
                    className="py-4 text-lg text-gray-500"
                  >
                    Comment
                  </label>
                  <textarea
                    type="text"
                    name="comment"
                    id="comment"
                    placeholder="Addition Information: phone number or doorphone code"
                    required
                    value={cityDelivery.comment}
                    onChange={handleCity}
                    className="resize-none h-32 py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
                  ></textarea>
                </div>
              </div>
            )}
            {shipping.openStore && (
              <div className=" mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 transition-all ease-linear duration-500  ">
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.1812836849363!2d144.95343106869794!3d-37.81739907631358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121+King+St%2C+Melbourne+VIC+3000%2C+Australia!5e0!3m2!1sen!2sin!4v1562916623921!5m2!1sen!2sin"
                    height="200"
                    style={{ border: "0", width: "100%" }}
                    title="Golden Location"
                    allowFullScreen=""
                  ></iframe>
                </div>

                <div className="border-2  text-center border-gray-400 px-10 py-12 rounded-md">
                  <h2 className="mb-4 font-medium text-xl capitalize">
                    Store Name
                  </h2>
                  <p className="tracking-normal leading-relaxed">
                    St 300, Amazon Tucson Arizona
                  </p>
                  <p>Daily 10:00-22:00</p>
                </div>
              </div>
            )}
          </div>
          <div className="text-2xl ml-4 lg:ml-0 py-8 text-gray-500">
            <span>3.</span> <span>Payment</span>
          </div>
          <div className=" h-full items-center px-8 py-8 mx-auto  bg-white shadow-lg ">
            <div className="grid grid-cols-1  lg:grid-cols-3 place-items-center gap-8">
              <div
                onClick={() =>
                  setShipping({
                    ...shipping,
                    paymentMethod: "Cash payment",
                    onlinePayment: false,
                    electronic: false,
                    cash: true,
                  })
                }
                className={` ${
                  shipping.cash && "border-blue-400"
                } w-full cursor-pointer transition-all ease-linear duration-500 border-grey-400 rounded-md group hover:border-blue-400 text-center border-2 py-12 px-4`}
              >
                <div className="mb-2 flex justify-center items-center">
                  <div
                    className={` ${
                      shipping.cash && "bg-blue-400 "
                    }group-hover:border-blue-400 rounded-full w-7 h-7 border-2 border-grey-400`}
                  ></div>
                </div>
                <h2 className="text-xl font-medium uppercase text-gray-500">
                  Payment Upon Receipt
                </h2>
                <p>credit card or cash</p>
              </div>

              <div
                onClick={() =>
                  setShipping({
                    ...shipping,
                    paymentMethod: "Online Card",
                    onlinePayment: true,
                    electronic: false,
                    cash: false,
                  })
                }
                className={` ${
                  shipping.onlinePayment && "border-blue-400"
                } w-full cursor-pointer transition-all ease-linear duration-500 border-grey-400 rounded-md group hover:border-blue-400 text-center border-2 py-12 px-4`}
              >
                <div className="mb-2 flex justify-center items-center">
                  <div
                    className={` ${
                      shipping.onlinePayment && "bg-blue-400 "
                    }group-hover:border-blue-400 rounded-full w-7 h-7 border-2 border-grey-400`}
                  ></div>
                </div>
                <h2 className="text-xl font-medium uppercase text-gray-500">
                  Online By Card
                </h2>
                <p>Visa, MasterCard</p>
              </div>

              <div
                onClick={() =>
                  setShipping({
                    ...shipping,
                    paymentMethod: "Electronic Payment",
                    onlinePayment: false,
                    electronic: true,
                    cash: false,
                  })
                }
                className={` ${
                  shipping.electronic && "border-blue-400"
                } w-full cursor-pointer transition-all ease-linear duration-500 border-grey-400 rounded-md group hover:border-blue-400 text-center border-2 py-12 px-4`}
              >
                <div className="mb-2 flex justify-center items-center">
                  <span
                    className={` ${
                      shipping.electronic && "bg-blue-400 "
                    }group-hover:border-blue-400 rounded-full w-7 h-7 border-2 border-grey-400`}
                  ></span>
                </div>
                <h2 className="text-xl font-medium uppercase text-gray-500">
                  Electronic Payment.
                </h2>
                <p>Paypal, Yandex money</p>
              </div>
            </div>
          </div>
          <div className="flex px-2 bg-white border-gray-400 border-t-2 space-x-4 items-center w-full py-6 justify-center  ">
            <span>
              <Icons.Lock />
            </span>
            <p>Security of payment is provided by secured protocols</p>
            <img src="/ecoms/images/verified-by-visa.svg" alt="visa" />
            <img src="/ecoms/images/mastercard-securecode.svg" alt="master" />
          </div>
          <div className="mt-12 h-full  px-8 py-8 mx-auto  bg-white shadow-lg ">
            <h2 className="text-xl text-gray-700 font-medium pb-2">
              {products?.length > 1 ? "Items In Card" : "Item In Card"}
            </h2>
            {products?.map((each) => (
              <div
                key={each._id}
                className="flex pb-8 pt-2 justify-between items-center"
              >
                <div>
                  <p className="font-normal">{each.name}</p>
                  <p className="font-normal leading-loose">
                    {" "}
                    {each.description?.slice(0, 50)}
                  </p>
                  <p>
                    {each.quantity} x {each.price}
                  </p>
                </div>
                <p>{sumSingle(each._id)}</p>
              </div>
            ))}

            <div className="border-t-2 border-grey-400 pb-4">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-gray-500 text-lg">Shipping</h3>

                <div>
                  <p className="text-gray-500 text-lg">{shipping.method}</p>
                  <p className="text-xm text-gray-400">Free Tomorrow</p>
                </div>
              </div>
              <div className="flex justify-between items-center ">
                <h3 className="text-gray-500 text-lg">payment</h3>

                <div>
                  <p className="text-gray-500 text-lg capitalize">
                    {shipping.paymentMethod}
                  </p>
                </div>
              </div>
            </div>
            <div className="py-8 text-lg space-y-4 text-gray-700 font-medium  items-center border-t-2 border-grey-400">
              <div className="flex justify-between">
                <h3>Subtotal</h3>

                <p>{formatCurrency(total)}</p>
              </div>
              <div className="flex justify-between">
                <h3>Discount</h3>

                <p className="text-red-500">-$20</p>
              </div>
            </div>
            <div className=" py-8 text-2xl text-gray-700 font-medium  border-t-2 border-grey-400">
              <div className="flex justify-between items-center">
                <h3>Total</h3>

                <p>{total ? formatCurrency(total) : formatCurrency("0000")}</p>
              </div>
              {shipping.cash && (
                <button className="mb-6 mt-8 py-2 w-full text-lg uppercase bg-blue-500 text-white focus:outline-none outline-none rounded">
                  Pay Now
                </button>
              )}

              {shipping.electronic && (
                <PayPal
                  total={total}
                  clearCart={clearCart}
                  replace={navigate}
                />
              )}
            </div>
          </div>
        </form>

        {shipping.onlinePayment && (
          <Stripe
            total={total}
            clearCart={clearCart}
            shipping={shipping}
            delivery={shipping.openRegion ? regionDelivery : cityDelivery}
            contactInformation={contactInformation}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
