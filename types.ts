export interface RawFinancingData {
  description: string;
  amount: number;
}

export interface FinancingData {
  codigo: string;
  nombre: string;
  shortName: string;
  monto: number;
  monto_millones: number;
  color: string;
}

export interface FundingDistribution {
  name: string;
  value: number;
  color: string;
}

export interface HistoricalData {
  year: string;
  totalNacional: number;
}
