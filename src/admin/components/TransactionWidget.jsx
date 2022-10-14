import React from "react";

export default function TransactionWidget() {
  return (
    <div className="widget1 shadow-lg mt-4 rounded-lg w-full lg:overflow-x-hidden overflow-x-scroll dark:bg-gray-800 bg-gray-50">
      <div className="py-4">
        <h1 className="text-blue-500 pl-4 uppercase font-bold text-xl">
          Latest Transactions
        </h1>
      </div>
      <table className=" w-full  overflow-x-scroll rounded-lg ">
        <thead>
          <tr className="dark:bg-gray-800 bg-gray-300 dark:text-white dark:border-b dark:border-b-blue-400">
            <td className=" p-4" scope="row">
              Users
            </td>
            <td className=" p-4" scope="row">
              Date
            </td>
            <td className=" p-4" scope="row">
              Amount
            </td>

            <td className=" p-4" scope="row">
              status
            </td>
          </tr>
        </thead>
        <tbody className=" pt-4  dark:bg-gray-800 dark:text-white">
          <tr className="text-gray-500">
            <td className=" flex p-4  items-center gap-2">
              {" "}
              <img
                src="/ecoms/images/promo/macbook-new.jpg"
                alt="profile"
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
              <span>Donchi</span>
            </td>
            <td className="  pl-2">24/4/2023</td>
            <td className="p-4  whitespace-nowrap">$400.00</td>
            <td className="p-4  whitespace-nowrap">
              <span className="rounded-full border pb-3 bg-green-400 text-white border-green-400 text-center py-2 px-4">
                success
              </span>
            </td>
          </tr>
          <tr className="text-gray-500">
            <td className=" flex p-4  items-center gap-2">
              {" "}
              <img
                src="/ecoms/images/promo/macbook-new.jpg"
                alt="profile"
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
              <span>Donchi</span>
            </td>
            <td className="  pl-2">24/4/2023</td>
            <td className="p-4  whitespace-nowrap">$400.00</td>
            <td className="p-4  whitespace-nowrap">
              <span className="rounded-full border pb-3 bg-red-400 text-white border-red-400 text-center py-2 px-4">
                Failed
              </span>
            </td>
          </tr>
          <tr className="text-gray-500">
            <td className=" flex p-4  items-center gap-2">
              {" "}
              <img
                src="/ecoms/images/promo/macbook-new.jpg"
                alt="profile"
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
              <span>Donchi</span>
            </td>
            <td className="  pl-2">24/4/2023</td>
            <td className="p-4  whitespace-nowrap">$400.00</td>
            <td className="p-4  whitespace-nowrap">
              <span className="rounded-full border pb-3 bg-yellow-400 text-white border-yellow-400 text-center py-2 px-4">
                Pending
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
