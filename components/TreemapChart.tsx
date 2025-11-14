
import React from 'react';
import { ResponsiveContainer, Treemap, Tooltip } from 'recharts';
import type { FinancingData } from '../types';
import Card from './Card';

interface TreemapChartProps {
  data: FinancingData[];
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
    return (
      <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-600 p-3 rounded-md shadow-lg text-sm">
        <p className="font-bold text-sky-400">{`Código: ${data.codigo}`}</p>
        <p className="text-slate-200">{data.nombre}</p>
        <p className="text-slate-300 mt-1">{`Monto: $${formatNumber(data.monto_millones)} millones`}</p>
      </div>
    );
  }
  return null;
};

// Custom content renderer to show the code inside the treemap cell
const CustomizedContent = (props: any) => {
  const { x, y, width, height, codigo, color } = props;

  // Recharts calls the content renderer for container nodes which don't have our data props.
  // We only render the leaf nodes which are identifiable by having a 'color' property.
  if (!color) {
    return null;
  }
  
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: color,
          stroke: 'rgb(15 23 42)',
          strokeWidth: 2,
          strokeOpacity: 1,
        }}
      />
      {width > 80 && height > 35 && (
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#fff"
          className="font-bold text-lg"
        >
          {codigo}
        </text>
      )}
    </g>
  );
};


const TreemapChart: React.FC<TreemapChartProps> = ({ data }) => {
  return (
    <Card title="Financiamientos Nacionales Educación – Mendoza 2025 (en millones de $)">
      <ResponsiveContainer width="100%" height={500}>
        <Treemap
          data={data}
          dataKey="monto_millones"
          ratio={4 / 3}
          stroke="#fff"
          fill="#8884d8"
          isAnimationActive={false} // Animation can sometimes cause issues with custom content
          content={<CustomizedContent />}
        >
          <Tooltip content={<CustomTooltip />} />
        </Treemap>
      </ResponsiveContainer>
    </Card>
  );
};

export default TreemapChart;
