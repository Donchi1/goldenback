import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Charts() {
  const data = [
    { name: "donland", amt: 400 },
    { name: "don", amt: 40 },
    { name: "land", amt: 460 },
    { name: "Elviz", amt: 90 },
    { name: "Ema", amt: 100 },
    { name: "chidi", amt: 500 },
    { name: "chidi", amt: 800 },
    { name: "chidi", amt: 700 },
  ];
  return (
    <ResponsiveContainer
      width="100%"
      className="shadow-lg lg:max-h-[40%] max-h-[20%] rounded-lg mt-4 bg-gray-50 dark:bg-gray-800 dark:text-white pb-4 lg:pb-0"
    >
      <LineChart
        width={150}
        height={50}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid
          strokeDasharray="5 5"
          strokeOpacity={0.4}
          strokeDashoffset={9}
        />
        <XAxis
          dataKey="name"
          strokeDasharray="5 5"
          tick={{ fill: "#3636df" }}
        />

        <Tooltip />

        <Line type="monotone" dataKey="name" stroke="#3636df" />

        <Line
          type="monotone"
          dataKey="amt"
          stroke="#3636df"
          activeDot={{ r: 12 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
