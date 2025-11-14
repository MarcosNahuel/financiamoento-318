import React, { useState, useEffect } from 'react';
import { getProcessedData, getFundingDistribution, getHistoricalData, getAvailableYears } from './services/dataService';
import type { FinancingData, FundingDistribution, HistoricalData } from './types';
import TreemapChart from './components/TreemapChart';
import HorizontalBarChart from './components/HorizontalBarChart';
import DashboardHeader from './components/DashboardHeader';
import AnalysisSummary from './components/AnalysisSummary';
import FundingDistributionChart from './components/FundingDistributionChart';
import TimeSeriesChart from './components/TimeSeriesChart';

const App: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [availableYears, setAvailableYears] = useState<number[]>([]);
  const [data, setData] = useState<FinancingData[]>([]);
  const [distributionData, setDistributionData] = useState<FundingDistribution[]>([]);
  const [historicalData, setHistoricalData] = useState<HistoricalData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Load static data once
    try {
      setAvailableYears(getAvailableYears());
      setHistoricalData(getHistoricalData());
    } catch (error) {
      console.error("Failed to load initial data:", error);
    }
  }, []);

  useEffect(() => {
    // Load year-specific data when selectedYear changes
    setLoading(true);
    try {
      const processedData = getProcessedData(selectedYear);
      const distribution = getFundingDistribution(selectedYear);
      setData(processedData);
      setDistributionData(distribution);
    } catch (error) {
      console.error(`Failed to process data for year ${selectedYear}:`, error);
      setData([]); // Clear data on error
      setDistributionData([]);
    } finally {
      setLoading(false);
    }
  }, [selectedYear]);

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-[500px]">
          <p className="text-2xl animate-pulse">Cargando datos del año {selectedYear}...</p>
        </div>
      );
    }
    if (data.length === 0) {
      return (
        <div className="flex items-center justify-center min-h-[500px] bg-slate-800/50 rounded-lg">
          <p className="text-2xl text-red-400">Error: No hay datos de financiamiento disponibles para el año {selectedYear}.</p>
        </div>
      );
    }
    return (
       <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
          <div className="lg:col-span-3 flex flex-col gap-6">
             <TreemapChart data={data} selectedYear={selectedYear} />
             <TimeSeriesChart data={historicalData} />
          </div>
          <div className="lg:col-span-2 flex flex-col gap-6">
             <AnalysisSummary data={data} selectedYear={selectedYear} />
             <FundingDistributionChart data={distributionData} />
             <HorizontalBarChart data={data} />
          </div>
        </div>
    );
  };


  return (
    <main className="min-h-screen bg-slate-900 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="container mx-auto">
        <DashboardHeader 
          selectedYear={selectedYear}
          availableYears={availableYears}
          onYearChange={handleYearChange}
        />
        {renderContent()}
      </div>
    </main>
  );
};

export default App;