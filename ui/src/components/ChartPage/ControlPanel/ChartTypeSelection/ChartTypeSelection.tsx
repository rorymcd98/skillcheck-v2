'use client';
import { FC } from 'react';
import { ChartType } from '../../ChartDataContex';
import useChartDataContext from '../../ChartDataContex';
import { EuiButton, EuiFlexItem, EuiText } from '@elastic/eui';
import Link from 'next/link';

interface ChartTypeSelectionProps {
  chartType: ChartType;
}

const ChartTypeSelection: FC<ChartTypeSelectionProps> = ({ chartType }) => {
  const { chartType: currentChartType } = useChartDataContext();
  const isSelected = currentChartType === chartType;
  const iconType = chartType === ChartType.SALARY ? 'visBarVertical' : 'visPie';
  return (
    <EuiFlexItem grow={false}>
      <Link href={`/${chartType}`} passHref>
        <EuiButton iconType={iconType} fill={isSelected} color="primary">
          <EuiText>{chartType}</EuiText>
        </EuiButton>
      </Link>
    </EuiFlexItem>
  );
};

export default ChartTypeSelection;
