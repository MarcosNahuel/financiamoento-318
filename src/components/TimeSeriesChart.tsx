import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import type { HistoricalData } from '../types';
import Card from './Card';

interface TimeSeriesChartProps {
  data: HistoricalData[];
}

const formatNumber = (num: number) => {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num.toFixed(0);
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-600 p-3 rounded-md shadow-lg text-sm">
        <p className="font-bold text-sky-400">{`Año: ${label}`}</p>
        <p className="text-slate-300 mt-1">{`Total Nacional: $${new Intl.NumberFormat('es-AR').format(payload[0].value)} millones`}</p>
      </div>
    );
  }
  return null;
};

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ data }) => {
  return (
    <Card title="Evolución Histórica de Aportes Nacionales (en millones de $)">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
          <XAxis dataKey="year" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" tickFormatter={formatNumber} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="monotone" dataKey="totalNacional" name="Total Nacional" stroke="#38bdf8" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default TimeSeriesChart;
