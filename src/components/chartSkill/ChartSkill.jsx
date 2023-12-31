import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

export default function App({ data, size }) {
  return (
    <ComposedChart
      width={size}
      height={400}
      data={data}
      style={{
        width: '100%',
      }}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" barSize={20} fill="#7f55da" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
  );
}
