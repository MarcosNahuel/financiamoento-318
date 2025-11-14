import React from 'react';

interface DashboardHeaderProps {
  selectedYear: number;
  availableYears: number[];
  onYearChange: (year: number) => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ selectedYear, availableYears, onYearChange }) => {
  return (
    <header className="border-b border-slate-700 pb-4">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-sky-400">
            Dashboard de Financiamiento Educativo
          </h1>
          <p className="text-lg text-slate-400 mt-2">
            Análisis de Aportes Nacionales - Mendoza
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <label htmlFor="year-select" className="sr-only">Seleccionar Año</label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={(e) => onYearChange(parseInt(e.target.value, 10))}
            className="bg-slate-800 border border-slate-600 text-white text-md rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5"
            aria-label="Seleccionar año para visualizar datos"
          >
            {availableYears.map(year => (
              <option key={year} value={year}>
                Año {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
