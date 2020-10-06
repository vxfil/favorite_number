import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export const ChartComponent = () => {
  return (
    <PieChart
      animate={true}
      lineWidth={70}
      paddingAngle={0.5}
      label={(l) => `${l.dataEntry.title}: ${l.dataEntry.value - 1}`}
      labelPosition={85}
      labelStyle={{
        fill: 'whitesmoke',
        fontSize: 3,
      }}
      data={[
        { title: 'One', value: 1, color: '#E38627' },
        { title: 'Two', value: 1, color: '#C13C37' },
        { title: 'Three', value: 1, color: '#6A2135' },
        { title: 'Four', value: 3, color: '#5d3178' },
        { title: 'Five', value: 1, color: '#884c7c' },
        { title: 'Six', value: 1, color: '#08baac' },
        { title: 'Seven', value: 1, color: '#6d07df' },
        { title: 'Eighth', value: 2, color: '#1a2157' },
        { title: 'Nine', value: 1, color: '#199ed0' },
      ]}
    />
  );
};
