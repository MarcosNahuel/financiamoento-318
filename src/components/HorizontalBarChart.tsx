
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import type { FinancingData } from '../types';
import Card from './Card';

interface HorizontalBarChartProps {
  data: FinancingData[];
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'decimal',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(num);
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const dataItem = payload[0].payload;
    return (
      <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-600 p-3 rounded-md shadow-lg text-sm">
        <p className="font-bold text-sky-400">{dataItem.nombre}</p>
        <p className="text-slate-300 mt-1">{`Monto: $${formatNumber(payload[0].value)} millones`}</p>
      </div>
    );
  }
  return null;
};

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({ data }) => {
  return (
    <Card title="Desglose por Monto (en millones de $)">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
          <XAxis type="number" stroke="#94a3b8" tickFormatter={(tick) => `${tick / 1000}k`} />
          <YAxis type="category" dataKey="shortName" stroke="#94a3b8" width={120} tick={{ fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}/>
          <Bar dataKey="monto_millones" fill="#0ea5e9" radius={[0, 4, 4, 0]}>
             <LabelList 
                dataKey="monto_millones" 
                position="right" 
                formatter={(value: number) => formatNumber(value)} 
                style={{ fill: '#e2e8f0', fontSize: '12px' }}
             />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default HorizontalBarChart;