import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as Icons from "react-icons/fa";
import { BiLocationPlus, BiPhone } from "react-icons/bi";
import { mobileData } from "../products/tempFile/TestFile";
import { useDispatch, useSelector } from "react-redux";
import makeRequest from "../utils/makeRequest";
import axios from "../utils/axios";
import { getOrders } from "../State/goldenSlice";

function Orders() {
  const { orders } = useSelector((state) => state.golden);
  const user =
    useSelector((state) => state.auth.user) || localStorage.getItem("user");
  const [orderDates, setOrderDates] = useState([]);
  const [selectDate, setSelectDate] = useState("");
  const dispatch = useDispatch();

  const myDate = new Date(orders?.createdAt);

  const handleDateChange = (e) => {
    setSelectDate(e.target.value);
  };

  useEffect(() => {
    const getUserOrders = async () => {
      const { data, error } = await makeRequest(
        axios.get,
        `/orders/find/${user._id}`
      );
      dispatch(getOrders(data.orderProducts));
      setOrderDates(data.order.map((each) => each.createdAt));
    };
    getUserOrders();
  }, [user]);

  useEffect(() => {
    const getOrderByDate = async () => {
      const { data, error } = await makeRequest(
        axios.get,
        `/orders/find/${user._id}?date=${selectDate}`,
        selectDate
      );
      dispatch(getOrders(data.orderProducts));
    };
    getOrderByDate();
  }, [selectDate]);

  return (
    <section className="container  mx-auto pb-4">
      <div className="mt-14 lg:mx-0 mx-6 sticky top-0">
        <header className="border-b border-gray-400 pb-6">
          <div className="flex justify-between items-center">
            <h4 className="text-gray-700 font-bold text-[1.4rem] lg:text-[1.7rem]">
              Order ID: {orders?._id?.slice(0, 10)}
            </h4>
            <div className="flex gap-4 flex-col lg:flex-row">
              <button className=" shadow rounded-lg lg:py-3 py-2 gap-2 px-2 text-gray-700 border text-bold flex justify-center items-center">
                <Icons.FaFileInvoice /> Invoice
              </button>
              <button className="bg-blue-500 shadow rounded-lg  lg:py-3 py-2 gap-2 px-2 text-white  flex justify-center items-center">
                Track Order
              </button>
            </div>
          </div>
          <div className="flex justify-between gap-4 lg:justify-around items-center mt-4">
            <div className="div flex lg:flex-row gap-2 flex-col items-center justify-center">
              <p className="text-gray-400">
                Order Date : {myDate.toLocaleDateString()}
              </p>
              <select
                value={selectDate}
                onChange={handleDateChange}
                className="  rounded-lg border outline-none py-1 px-2 shadow "
              >
                {orderDates?.map((each) => (
                  <option value={each}>
                    {new Date(each).toLocaleString()}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-green-500 flex gap-2 items-center">
              <Icons.FaPlane className="hidden lg:inline" /> Estimated Delivery
              Date :{" "}
              {new Date(
                myDate.setDate(myDate.getDate() + 5)
              ).toLocaleDateString()}
            </p>
          </div>
        </header>

        <div className="pt-5 border-b border-gray-400 pb-6 bg-white lg:bg-gray-50 ">
          <div className="lg:w-[80%] w-full lg:mx-auto">
            {orders?.products?.map((each, idx) => (
              <div
                key={each._id}
                className="flex justify-between items-center my-3"
              >
                <div className="flex gap-8 lg:gap-24 items-center">
                  <div className="rounded-lg bg-gray-50 border  p-4">
                    <img
                      src={mobileData[idx]?.img}
                      alt="product"
                      className="w-[50px] lg:w-[100px] lg:h-[100px] h-[50px] "
                    />
                  </div>
                  <div>
                    <h5 className="text-[1.2rem] lg:text-[1.4rem] font-bold  text-gray-500">
                      {each.name}
                    </h5>
                    <div className="flex text-[14px] gap-2 lg:gap-4 [&_span]:text-gray-400">
                      <span>{each?.Details?.Os}</span>
                      <span>{each?.Details?.Weight}</span>
                      <span className="hidden lg:inline">
                        {each?.Details?.Ram}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[1.2rem]  lg:text-[1.4rem] font-bold  text-gray-700">
                    ${each.price}
                  </span>

                  <span className="gap-4 text-gray-400 text-right">
                    {" "}
                    Qt: {each.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="  border-gray-400 pb-6 bg-white lg:bg-gray-50 ">
          <div className="lg:w-[80%] w-full lg:mx-auto flex justify-between ">
            <div>
              <h5 className="text-[1.2rem] lg:text-[1.4rem] my-4 font-bold  text-gray-500">
                Payment
              </h5>
              <p>
                Visa***54{" "}
                <span className="font-bold uppercase bg-blue-100 rounded-sm p-1 text-blue">
                  Visa
                </span>
              </p>
            </div>
            <div>
              <h5 className="text-[1.2rem] lg:text-[1.4rem] font-bold my-4 text-gray-500">
                Delivery
              </h5>
              <div className="[&_p]:flex [&_p]:gap-2 [&_p]:items-center ">
                <p>
                  <BiLocationPlus />
                  {orders?.shipping?.address?.appartment}{" "}
                  {orders?.shipping?.address?.building}{" "}
                  {orders?.shipping?.address?.floor}{" "}
                  {orders?.shipping?.address?.house}
                  {orders?.shipping?.address?.postalcode}{" "}
                  {orders?.shipping?.address?.street
                    ? orders?.shipping?.address?.street
                    : orders?.shipping?.pickupType}
                </p>
                <p>
                  <BiPhone /> {orders?.shipping?.contact?.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Orders;
