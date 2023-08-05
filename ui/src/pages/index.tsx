import { FunctionComponent } from 'react';
import Head from 'next/head';
import { EuiSpacer } from '@elastic/eui';
import Wrapper from '../components/layout/wrapper';
import HorizontalBarChart, {
  BarData,
} from '../components/HorizontalBarChart/HorizontalBarChart';
import ExtendingPanel from '../components/ExtendingPanel';
import ControlPanel from '../components/ControlPanel/ControlPanel';

const Index: FunctionComponent = () => {
  const demoChartData: BarData[] = [
    {
      label: 'React',
      value: 100,
      maxValue: 100,
      prefix: '+',
      suffix: '%',
      flair: '🔥%',
      barColor: '#D36086',
    },
    {
      label: 'Next.js',
      value: 30,
      maxValue: 100,
      prefix: '+',
      suffix: '%',
      flair: '+5🔥%',
      barColor: '#D36086',
    },
  ];
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Wrapper>
        <EuiSpacer size="xxl" />
        <EuiSpacer size="xxl" />
        <ControlPanel />
        <EuiSpacer size="s" />
        <ExtendingPanel
          proportion={1}
          child1={<HorizontalBarChart chartData={demoChartData} />}
          child2={<HorizontalBarChart chartData={demoChartData} />}
        />

        <EuiSpacer size="xxl" />
        <EuiSpacer size="xxl" />
      </Wrapper>
    </>
  );
};

export default Index;
