import type { RawFinancingData, FinancingData, FundingDistribution, HistoricalData } from '../types';

const allRawData: { [year: number]: RawFinancingData[] } = {
  2010: [
    { description: '0 Rentas Generales', amount: 2056112269.22 },
    { description: '95 Remesas para destinos varios', amount: 11559.17 },
    { description: '102 Pacto Federal Educativo', amount: 5330950.42 },
    { description: '119 Ley 25053 Fondo Nac.de Incentivo Docen', amount: 102388419.83 },
    { description: '159 Ingresos Ley 24255 art. 224 y Ley 2269', amount: 146740.72 },
    { description: '191 Prog.más y mejor Dto.1698/2004', amount: 16218.70 },
    { description: '201 Convenio D.G.E. La Caja Seguro', amount: 65449.04 },
    { description: '214 Ley 26075 Financiamiento Educativo', amount: 448336844.92 },
    { description: '248 Fdo Fed.Solidario Ley 8028 Dto N 206/0', amount: 1929793.16 },
    { description: '258 P/mant.y opt.de pres.ss.pcos.esenciale', amount: 49996457.51 },
    { description: '999 No controla quota', amount: 0.00 },
  ],
  2011: [
    { description: '0 Rentas Generales', amount: 3708034779.72 },
    { description: '95 Remesas para destinos varios', amount: 11559.17 },
    { description: '102 Pacto Federal Educativo', amount: 4666299.96 },
    { description: '119 Ley 25053 Fondo Nac.de Incentivo Docen', amount: 164517261.76 },
    { description: '159 Ingresos Ley 24255 art. 224 y Ley 2269', amount: 92740.72 },
    { description: '191 Prog.más y mejor Dto.1698/2004', amount: 0.00 },
    { description: '201 Convenio D.G.E. La Caja Seguro', amount: 65449.04 },
    { description: '214 Ley 26075 Financiamiento Educativo', amount: 27660876.63 },
    { description: '248 Fdo Fed.Solidario Ley 8028 Dto N 206/0', amount: 1668461.28 },
    { description: '275 D.G.E. Fdo.Pcial.Educativo Ley 8208/10', amount: 0.00 },
    { description: '999 No controla quota', amount: 0.00 },
  ],
  2012: [
    { description: '0 Rentas Generales', amount: 4270226826.09 },
    { description: '95 Remesas para destinos varios', amount: 11559.17 },
    { description: '102 Pacto Federal Educativo', amount: 3994320.10 },
    { description: '119 Ley 25053 Fondo Nac.de Incentivo Docen', amount: 208900885.17 },
    { description: '159 Ingresos Ley 24255 art. 224 y Ley 2269', amount: 92740.72 },
    { description: '201 Convenio D.G.E. La Caja Seguro', amount: 65449.04 },
    { description: '214 Ley 26075 Financiamiento Educativo', amount: 729420557.81 },
    { description: '248 Fdo Fed.Solidario Ley 8028 Dto N 206/0', amount: 1201643.40 },
    { description: '275 D.G.E. Fdo.Pcial.Educativo Ley 8208/10', amount: 0.00 },
    { description: '999 No controla quota', amount: 0.00 },
  ],
  2013: [
    { description: '0 Rentas Generales', amount: 5521438020.34 },
    { description: '95 Remesas para destinos varios', amount: 11559.17 },
    { description: '102 Pacto Federal Educativo', amount: 7430311.20 },
    { description: '119 Ley 25053 Fondo Nac.de Incentivo Docen', amount: 188272990.59 },
    { description: '159 Ingresos Ley 24255 art. 224 y Ley 2269', amount: 17587.40 },
    { description: '201 Convenio D.G.E. La Caja Seguro', amount: 0.00 },
    { description: '214 Ley 26075 Financiamiento Educativo', amount: 968901442.66 },
    { description: '248 Fdo Fed.Solidario Ley 8028 Dto N 206/0', amount: 360184.65 },
    { description: '275 D.G.E. Fdo.Pcial.Educativo Ley 8208/10', amount: 214770.00 },
    { description: '999 No controla quota', amount: 0.00 },
  ],
  2014: [
    { description: '0 Rentas Generales', amount: 7105858668.96 },
    { description: '95 Remesas para destinos varios', amount: 11559.00 },
    { description: '102 Pacto Federal Educativo', amount: 8712515.14 },
    { description: '119 Ley 25053 Fondo Nac.de Incentivo Docen', amount: 246975459.73 },
    { description: '159 Ingresos Ley 24255 art. 224 y Ley 2269', amount: 0.00 },
    { description: '201 Convenio D.G.E. La Caja Seguro', amount: 0.00 },
    { description: '214 Ley 26075 Financiamiento Educativo', amount: 1138010744.10 },
    { description: '248 Fdo Fed.Solidario Ley 8028 Dto N 206/0', amount: 239955.51 },
    { description: '275 D.G.E. Fdo.Pcial.Educativo Ley 8208/10', amount: 0.00 },
    { description: '282 Ley 8393/11 art 3 canon extraord.de Pr', amount: 19990281.03 },
    { description: '999 No controla quota', amount: 0.00 },
  ],
  2015: [
    { description: '0 Rentas Generales', amount: 9772469688.18 },
    { description: '95 Remesas para destinos varios', amount: 11559.00 },
    { description: '102 Pacto Federal Educativo', amount: 9567786.19 },
    { description: '119 Ley 25053 Fondo Nac.de Incentivo Docen', amount: 402896052.54 },
    { description: '214 Ley 26075 Financiamiento Educativo', amount: 3115279420.13 },
    { description: '248 Fdo Fed.Solidario Ley 8028 Dto N 206/0', amount: 239955.51 },
    { description: '275 D.G.E. Fdo.Pcial.Educativo Ley 8208/10', amount: 0.00 },
    { description: '282 Ley 8393/11 art 3 canon extraord.de Pr', amount: 0.00 },
    { description: '999 No controla quota', amount: 0.00 },
  ],
  2016: [
    { description: '0 Rentas Generales', amount: 10569713807.23 },
    { description: '95 Remesas para destinos varios', amount: 11559.00 },
    { description: '102 Pacto Federal Educativo', amount: 6752477.44 },
    { description: '119 Ley 25053 Fondo Nac.de Incentivo Docen', amount: 683904342.78 },
    { description: '159 Ingresos Ley 24255 art. 224 y Ley 2269', amount: 952000.74 },
    { description: '214 Ley 26075 Financiamiento Educativo', amount: 4048729149.72 },
    { description: '248 Fdo Fed.Solidario Ley 8028 Dto N 206/0', amount: 239955.51 },
    { description: '999 No controla quota', amount: 0.00 },
  ],
  2017: [
    { description: '0 Rentas Generales', amount: 14485811048.44 },
    { description: '95 Remesas para destinos varios', amount: 11559.00 },
    { description: '102 Pacto Federal Educativo', amount: 6812959.16 },
    { description: '119 Ley 25053 Fondo Nac.de Incentivo Docen', amount: 1414657411.82 },
    { description: '159 Ingresos Ley 24255 art. 224 y Ley 2269', amount: 954961.83 },
    { description: '214 Ley 26075 Financiamiento Educativo', amount: 4798813944.00 },
    { description: '248 Fdo Fed.Solidario Ley 8028 Dto N 206/0', amount: 239955.51 },
    { description: '999 No controla quota', amount: 0.00 },
  ],
  2018: [
    { description: '0 Rentas Generales', amount: 17032067025.85 },
    { description: '102 Pacto Federal Educativo', amount: 4209417.87 },
    { description: '119 Ley 25053 Fondo Nac.de Incentivo Docen', amount: 1775952353.60 },
    { description: '159 Ingresos Ley 24255 art. 224 y Ley 2269', amount: 146361.46 },
    { description: '180 PACE (Acción compensatoria escolar)FID', amount: 58178565.87 },
    { description: '214 Ley 26075 Financiamiento Educativo', amount: 5917484632.92 },
    { description: '999 No controla quota', amount: 3466923.60 },
  ],
  2019: [
    { description: '0 Rentas Generales', amount: 28193449359.66 },
    { description: '102 Pacto Federal Educativo', amount: 2977597.44 },
    { description: '119 Ley 25053 Fondo Nac.de Incentivo Docen', amount: 1113538604.85 },
    { description: '159 Ingresos Ley 24255 art. 224 y Ley 2269', amount: 207226.13 },
    { description: '180 PACE (Acción compensatoria escolar)FID', amount: 136479422.52 },
    { description: '214 Ley 26075 Financiamiento Educativo', amount: 9366193802.98 },
    { description: '999 No controla quota', amount: 1557169.95 },
  ],
  2020: [
    { description: '0 Rentas Generales', amount: 33887871294.16 },
    { description: '74 Situaciones de Emerg. y Desequilib.Fin', amount: 38896000.00 },
    { description: '102 Pacto Federal Educativo', amount: 6316791.93 },
    { description: '119 Ley 25053 Fondo Nac.de Incentivo Docen', amount: 2416400700.69 },
    { description: '159 Ingresos Ley 24255 art. 224 y Ley 2269', amount: 240832.06 },
    { description: '180 PACE (Acción compensatoria escolar)FID', amount: 245164272.32 },
    { description: '214 Ley 26075 Financiamiento Educativo', amount: 10967938832.77 },
  ],
  2021: [
    { description: '0 Rentas Generales', amount: 43247680908.62 },
    { description: '74 Situaciones de Emerg. y Desequilib.Fin', amount: 35750902.21 },
    { description: '102 Pacto Federal Educativo', amount: 7929230.11 },
    { description: '119 Ley 25053 Fondo Nac.de Incentivo Docen', amount: 3522554533.57 },
    { description: '123 Plan de Apoyo a la Educ. Inic,Obl y Mo', amount: 9650000.00 },
    { description: '159 Ingresos Ley 24255 art. 224 y Ley 2269', amount: 30442.97 },
    { description: '180 PACE (Acción compensatoria escolar)FID', amount: 432643094.28 },
    { description: '214 Ley 26075 Financiamiento Educativo', amount: 16840089358.06 },
  ],
  2022: [
    { description: '0 Rentas Generales', amount: 84466201016.85 },
    { description: '74 Situaciones de Emerg. y Desequilib.Fin', amount: 2428537.50 },
    { description: '102 Pacto Federal Educativo', amount: 2601431.90 },
    { description: '119 Ley 25053 Fondo Nac.de Incentivo Docen', amount: 5530839335.09 },
    { description: '123 Plan de Apoyo a la Educ. Inic,Obl y Mo', amount: 9650000.00 },
    { description: '159 Ingresos Ley 24255 art. 224 y Ley 2269', amount: 779751.33 },
    { description: '180 PACE (Acción compensatoria escolar)FID', amount: 500793731.78 },
    { description: '214 Ley 26075 Financiamiento Educativo', amount: 26779974906.69 },
    { description: '386 Prog. Universaliz. Jornada Completa o', amount: 153898718.35 },
    { description: '999 No controla quota', amount: 0.00 },
  ],
  2023: [
    { description: '0 Rentas Generales', amount: 210996509288.40 },
    { description: '74 Situaciones de Emerg. y Desequilib.Fin', amount: 2495302947.84 },
    { description: '102 Pacto Federal Educativo', amount: 7336015.64 },
    { description: '119 Ley 25053 Fondo Nac.de Incentivo Docen', amount: 12887524593.48 },
    { description: '123 Plan de Apoyo a la Educ. Inic,Obl y Mo', amount: 36947613.48 },
    { description: '159 Ingresos Ley 24255 art. 224 y Ley 2269', amount: 1200318.13 },
    { description: '180 PACE (Acción compensatoria escolar)FID', amount: 1064229301.53 },
    { description: '192 Venta herencia vacante Ley 5815 art.4t', amount: 88297326.00 },
    { description: '214 Ley 26075 Financiamiento Educativo', amount: 60652989600.00 },
    { description: '386 Prog. Universaliz. Jornada Completa o', amount: 1112289056.74 },
    { description: '999 No controla quota', amount: 237703.35 },
  ],
  2024: [
    { description: '0 Rentas Generales', amount: 622048783588.05 },
    { description: '74 Situaciones de Emerg. y Desequilib.Fin', amount: 1019942251.96 },
    { description: '102 Pacto Federal Educativo', amount: 15134815.64 },
    { description: '119 Ley 25053 Fondo Nac.de Incentivo Docen', amount: 3195448361.47 },
    { description: '123 Plan de Apoyo a la Educ. Inic,Obl y Mo', amount: 115464864.00 },
    { description: '159 Ingresos Ley 24255 art. 224 y Ley 2269', amount: 4177068.93 },
    { description: '180 PACE (Acción compensatoria escolar)FID', amount: 2649777946.39 },
    { description: '192 Venta herencia vacante Ley 5815 art.4t', amount: 0.00 },
    { description: '214 Ley 26075 Financiamiento Educativo', amount: 143156196720.78 },
    { description: '386 Prog. Universaliz. Jornada Completa o', amount: 3827693765.40 },
    { description: '395 Recursos de Origen Nacional D:G.E.', amount: 6864853658.19 },
    { description: '399 Ley 9545 - Fondo Escolar Permanente', amount: 39472789.00 },
  ],
  2025: [
    { description: '0 Rentas Generales', amount: 785638576700.55 },
    { description: '102 Pacto Federal Educativo', amount: 22349956.64 },
    { description: '119 Ley 25053 Fondo Nac.de Incentivo Docen', amount: 1401189672.68 },
    { description: '123 Plan de Apoyo a la Educ. Inic,Obl y Mo', amount: 339255368.00 },
    { description: '125 Instituto Nacional de Formación Docent', amount: 50400000.00 },
    { description: '159 Ingresos Ley 24255 art. 224 y Ley 2269', amount: 689417.54 },
    { description: '180 PACE (Acción compensatoria escolar)FID', amount: 3394527602.30 },
    { description: '192 Venta herencia vacante Ley 5815 art.4t', amount: 0.00 },
    { description: '214 Ley 26075 Financiamiento Educativo', amount: 107388368803.45 },
    { description: '386 Prog. Universaliz. Jornada Completa o', amount: 6701957190.63 },
    { description: '395 Recursos de Origen Nacional D:G.E.', amount: 4392353708.19 },
    { description: '399 Ley 9545 - Fondo Escolar Permanente', amount: 502002722.30 },
  ],
};

const provincialFundingByYear: { [year: number]: number } = {
  2010: 18000000000, 2011: 25000000000, 2012: 35000000000,
  2013: 48000000000, 2014: 60000000000, 2015: 75000000000,
  2016: 90000000000, 2017: 110000000000, 2018: 130000000000,
  2019: 160000000000, 2020: 190000000000, 2021: 240000000000,
  2022: 350000000000, 2023: 500000000000, 2024: 800000000000,
  2025: 1300000000000,
};


const COLORS = [
  '#0284c7', '#38bdf8', '#7dd3fc', '#0ea5e9', '#67e8f9', 
  '#0891b2', '#22d3ee', '#a5f3fc', '#06b6d4', '#6b21a8', '#a855f7', '#d8b4fe'
];

export const getAvailableYears = (): number[] => {
  return Object.keys(allRawData).map(Number).sort((a, b) => b - a);
};

export const getProcessedData = (year: number): FinancingData[] => {
  const dataForYear = allRawData[year];

  if (!dataForYear || dataForYear.length === 0) {
    throw new Error(`Data for ${year} not found or is empty.`);
  }

  // Filter out "Rentas Generales" and items with zero amount for the detailed charts
  const filteredData = dataForYear.filter(item => item.amount > 0 && item.description.split(' ')[0] !== '0');

  const processed = filteredData
    .map((item, index) => {
      const parts = item.description.split(' ');
      const codigo = parts[0];
      const nombre = parts.slice(1).join(' ');
      const monto_millones = item.amount / 1000000;

      const shortName = `${codigo} - ${nombre.substring(0, 25)}${nombre.length > 25 ? '...' : ''}`;

      return {
        codigo,
        nombre,
        shortName,
        monto: item.amount,
        monto_millones,
        color: COLORS[index % COLORS.length]
      };
    })
    .sort((a, b) => b.monto - a.monto);

  return processed;
};

export const getFundingDistribution = (year: number): FundingDistribution[] => {
  const nationalData = allRawData[year];
   if (!nationalData) {
    throw new Error(`National data for ${year} not found.`);
  }

  const nationalTotal = nationalData.reduce((sum, item) => sum + item.amount, 0);
  const provincialTotal = provincialFundingByYear[year] || 0;

  return [
    { name: 'Aportes Nacionales', value: nationalTotal / 1000000, color: '#0ea5e9' },
    { name: 'Aportes Provinciales', value: provincialTotal / 1000000, color: '#8b5cf6' },
  ];
};

export const getHistoricalData = (): HistoricalData[] => {
  return Object.keys(allRawData).map(yearStr => {
    const year = parseInt(yearStr, 10);
    const yearData = allRawData[year];
    const totalNacional = yearData.reduce((sum, item) => sum + item.amount, 0);
    return {
      year: yearStr,
      totalNacional: totalNacional / 1000000, // in millions
    };
  }).sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10));
};
