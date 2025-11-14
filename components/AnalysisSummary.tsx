import React from 'react';
import type { FinancingData } from '../types';
import Card from './Card';

interface AnalysisSummaryProps {
    data: FinancingData[];
    selectedYear: number;
}

const formatNumber = (num: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
};

const AnalysisSummary: React.FC<AnalysisSummaryProps> = ({ data, selectedYear }) => {
    if (!data || data.length === 0) {
         return (
             <Card title="Análisis y Observaciones">
                <p className="text-slate-400">No hay datos de financiamiento detallados para mostrar para el año {selectedYear}.</p>
             </Card>
         );
    }

    const totalFunding = data.reduce((sum, item) => sum + item.monto_millones, 0);
    const topSource = data[0];
    const topSourcePercentage = totalFunding > 0 ? (topSource.monto_millones / totalFunding) * 100 : 0;

    return (
        <Card title="Análisis y Observaciones">
            <div className="text-slate-300 space-y-4 text-sm">
                <p>
                    El análisis de los datos de <span className="font-bold text-white">{selectedYear}</span> revela una concentración significativa de los recursos en un programa principal.
                </p>
                <div className="p-3 bg-slate-700/50 rounded-lg border border-slate-600">
                    <p className="font-semibold text-sky-400">Principal Fuente de Financiamiento:</p>
                    <p><span className="font-bold">{topSource.codigo} - {topSource.nombre}</span></p>
                    <p className="mt-1">Este concepto representa <span className="font-bold text-white">${formatNumber(topSource.monto_millones)} millones</span>, lo que equivale aproximadamente al <span className="font-bold text-white">{topSourcePercentage.toFixed(1)}%</span> del total de fondos nacionales detallados.</p>
                </div>
                <p>
                    El gráfico de treemap muestra visualmente esta dominancia, mientras que el gráfico de barras ordena todas las fuentes para una comparación directa. Se excluyen de esta vista los "Aportes de Rentas Generales" para enfocar en las partidas específicas.
                </p>
            </div>
        </Card>
    );
};

export default AnalysisSummary;