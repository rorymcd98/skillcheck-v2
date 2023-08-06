import { EuiFlexGroup } from '@elastic/eui';
import { FC } from 'react';
import ChartTypeSelection from './ChartTypeSelection';
import { ChartType } from '../../ChartDataContex';

const ChartTypeSelectionGroup: FC = () => {
  return (
    <EuiFlexGroup
      direction="column"
      responsive={false}
      gutterSize="s"
      alignItems="center"
      justifyContent="spaceEvenly">
      <ChartTypeSelection chartType={ChartType.SALARY} />
      <ChartTypeSelection chartType={ChartType.COUNT} />
    </EuiFlexGroup>
  );
};

export default ChartTypeSelectionGroup;
