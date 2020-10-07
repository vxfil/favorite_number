import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const colors = [
  { title: 'One', color: '#E38627' },
  { title: 'Two', color: '#C13C37' },
  { title: 'Three', color: '#6A2135' },
  { title: 'Four', color: '#5d3178' },
  { title: 'Five', color: '#884c7c' },
  { title: 'Six', color: '#08baac' },
  { title: 'Seven', color: '#6d07df' },
  { title: 'Eighth', color: '#1a2157' },
  { title: 'Nine', color: '#199ed0' },
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

  return (
    <PieChart
      animate={true}
      lineWidth={70}
      paddingAngle={0.5}
      label={(l) => `${l.dataEntry.title}: ${l.dataEntry.value}`}
      labelPosition={85}
      labelStyle={{
        fill: 'whitesmoke',
        fontSize: 3,
      }}
      data={data}
    />
  );
};
