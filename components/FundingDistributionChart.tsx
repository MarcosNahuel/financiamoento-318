import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import type { FundingDistribution } from '../types';
import Card from './Card';

interface FundingDistributionChartProps {
  data: FundingDistribution[];
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const total = payload[0].payload.value / (payload[0].percent / 100);
    return (
      <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-600 p-3 rounded-md shadow-lg text-sm">
        <p className="font-bold" style={{ color: data.color }}>{data.name}</p>
        <p className="text-slate-300 mt-1">{`Monto: $${formatNumber(data.value)} millones`}</p>
        <p className="text-slate-400">{`Porcentaje: ${(payload[0].percent * 100).toFixed(1)}%`}</p>
      </div>
    );
  }
  return null;
};

const FundingDistributionChart: React.FC<FundingDistributionChartProps> = ({ data }) => {
  return (
    <Card title="Distribución de Fondos (Nacional vs. Provincial)">
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Tooltip content={<CustomTooltip />} />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default FundingDistributionChart;
