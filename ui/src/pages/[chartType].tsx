import { FC } from 'react';
import ChartPageLayout from '../components/ChartPage/ChartPageLayout';
import {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next/types';
import { ChartDataProvider } from '../components/ChartPage/ChartDataContex';
import { ChartType } from '../components/ChartPage/ChartDataContex';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.values(ChartType).map(chartType => ({
    params: { chartType },
  }));
  return {
    paths,
    fallback: false,
  };
};

// could use zod here
const isChartType = (chartType: unknown): chartType is ChartType =>
  Object.values(ChartType).includes(chartType as ChartType);

export const getStaticProps: GetStaticProps<{ chartType: ChartType }> = async ({
  params,
}) => {
  // throw new Error(ChartType.SALARY);
  const chartType = params?.chartType;
  if (!chartType || !isChartType(chartType)) {
    return {
      props: {
        chartType: ChartType.SALARY,
      },
    };
  } else {
    return {
      props: {
        chartType: chartType,
      },
    };
  }
};

export type StaticChartData = InferGetStaticPropsType<typeof getStaticProps>;
interface ChartPageProps extends StaticChartData {
  defaultChartType?: ChartType;
}

//Todo use defaultChartType
const chartPage: FC<ChartPageProps> = ({ chartType }) => {
  return (
    <ChartDataProvider.Provider value={{ chartType }}>
      <ChartPageLayout chartType={chartType} />
    </ChartDataProvider.Provider>
  );
};
export default chartPage;
