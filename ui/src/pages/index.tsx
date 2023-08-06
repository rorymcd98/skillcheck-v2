import { FC } from 'react';
import ChartPageLayout from '../components/ChartPage/ChartPageLayout';
import { ChartType } from '../components/ChartPage/ChartDataContex';
const Index: FC = () => {
  return <ChartPageLayout chartType={ChartType.SALARY} />;
};

export default Index;
