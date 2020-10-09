import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const colors = [
  { title: "1", color: "#E38627" },
  { title: "2", color: "#C13C37" },
  { title: "3", color: "#6A2135" },
  { title: "4", color: "#5d3178" },
  { title: "5", color: "#884c7c" },
  { title: "6", color: "#08baac" },
  { title: "7", color: "#6d07df" },
  { title: "8", color: "#1a2157" },
  { title: "9", color: "#199ed0" },
];

export const ChartComponent = ({ charts }) => {
  const setColorsForData = (charts, colors) => {
    const res = [];
    for (const chart of charts) {
      for (const color of colors) {
        if (chart.title === color.title) {
          res.push({ ...chart, color: color.color });
        }
      }
    }
    return res;
  };
  const data = setColorsForData(charts, colors);
  console.log(data);

  return (
    <PieChart
      animate={true}
      lineWidth={70}
      paddingAngle={0.5}
      label={(l) => `${l.dataEntry.title}: ${l.dataEntry.value}`}
      labelPosition={85}
      labelStyle={{
        fill: "whitesmoke",
        fontSize: 3,
      }}
      data={data}
    />
  );
};
