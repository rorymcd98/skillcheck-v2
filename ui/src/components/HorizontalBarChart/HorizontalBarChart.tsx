import { EuiFlexGroup, EuiFlexGroupProps } from '@elastic/eui';
import { FC } from 'react';
import HorizontalBar from './HorizontalBar';

export type BarData = {
  label: string;
  value: number;
  maxValue: number;
  prefix?: string;
  suffix?: string;
  flair?: string;
  barColor?: string;
};

interface HorizontalBarChartProps extends EuiFlexGroupProps {
  chartData: BarData[];
}
const HorizontalBarChart: FC<HorizontalBarChartProps> = ({
  chartData,
  ...props
}) => {
  const horizontalBars = chartData.map(bar => {
    const { label, value, maxValue, prefix, suffix, flair, barColor } = bar;
    const percent = (value / maxValue) * 100;
    const valueText = `${prefix ? prefix : ''}${value}${suffix ? suffix : ''}`;
    return (
      <HorizontalBar
        key={label}
        percent={percent}
        valueText={valueText}
        flair={flair}
        HorizontalBarColor={barColor}
      />
    );
  });
  return (
    <EuiFlexGroup
      {...props}
      direction="column"
      style={{
        paddingRight: '6.5rem', // space for flair
      }}
      gutterSize="s"
      responsive={false}>
      {horizontalBars}
    </EuiFlexGroup>
  );
};

export default HorizontalBarChart;
