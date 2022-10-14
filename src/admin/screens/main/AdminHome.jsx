import React from "react";
import { Link, Outlet } from "react-router-dom";
import AnalyticsCard from "../../components/AnalyticsCard";
import Charts from "../../components/Charts";
import TransactionWidget from "../../components/TransactionWidget";
import UserWidget from "../../components/UserWidget";

function AdminHome() {
  return (
    <main className="admin-main  dark:bg-black w-full h-auto mb-0 pb-4 px-8">
      <div className="flex  justify-between items-center mx-4 mt-8 mb-4">
        <h1 className="dark:text-white text-gray-800  font-extrabold text-3xl    uppercase">
          Dashboard
        </h1>

        <button className=" py-2 px-4 bg-green-400 text-white  rounded-lg">
          {new Date().toDateString().toUpperCase()}
        </button>
      </div>
      <div className="flex lg:flex-row flex-col  gap-0 lg:gap-4  ">
        <AnalyticsCard title="Sales" info={"$2000"} arrow="fail" icon="s" />
        <AnalyticsCard title="Users" info={200} arrow="up" success icon="u" />
        <AnalyticsCard title="transaction" info={3000} arrow="down" icon="t" />
      </div>

      <Charts />

      <div className="flex lg:flex-row flex-col gap-4 w-full  ">
        <UserWidget />
        <TransactionWidget />
      </div>
      <Outlet />
    </main>
  );
}

export default AdminHome;
