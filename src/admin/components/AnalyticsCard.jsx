import React from "react";
import * as Icons from "react-bootstrap-icons";

export default function AnalyticsCard({ title, success, arrow, icon, info }) {
  const checkArrow = (arr) => {
    if (arr === "up") return "text-blue-500";
    if (arr === "down") return "text-yellow-400";
    if (arr === "fail") return "text-red-500";
  };
  return (
    <div className="rounded-lg bg-gray-50 dark:bg-gray-800 basis-[33%] dark:text-white  shadow-md px-6 py-4 mt-4">
      <div>
        <h1 className="uppercase text-lg  py-4">{title}</h1>
        <div className="flex justify-between gap-4 items-center">
          {icon === "s" && <Icons.GraphDownArrow size={50} />}
          {icon === "u" && <Icons.PersonBadge size={50} />}
          {icon === "t" && <Icons.CurrencyDollar size={50} />}
          <p className="text-4xl font-bold text-blue-500">{info}</p>
        </div>
        <div
          className={`${checkArrow(
            arrow
          )} flex items-center justify-end pt-1 gap-4 mt-2`}
        >
          <p className="text-gray-400">This month so far</p>
          {success ? <Icons.ArrowUp /> : <Icons.ArrowDown />}
        </div>
      </div>
    </div>
  );
}
