'use client';
import { createContext, useContext } from 'react';
import { StaticChartData } from '../../pages/[chartType]';

export enum ChartType {
  SALARY = 'salary',
  COUNT = 'count',
}

const ChartDataProvider = createContext<StaticChartData>({
  chartType: ChartType.SALARY,
});

export { ChartDataProvider };

const useChartDataContext = () => {
  const chartData = useContext(ChartDataProvider);
  return chartData;
};

export default useChartDataContext;
