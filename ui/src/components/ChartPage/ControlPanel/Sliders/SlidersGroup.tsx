import { EuiDualRange, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { FC } from 'react';

interface SlidersGroupProps {
  pass?;
}

const SlidersGroup: FC<SlidersGroupProps> = ({}) => {
  const sliderStyle = {
    // height: '10px',
  };
  const tempOnChange = () => {
    return;
  };
  return (
    <EuiFlexGroup
      className="sliders-group"
      direction={'column'}
      gutterSize="s"
      responsive={false}>
      <EuiFlexItem>
        <EuiDualRange
          showTicks={true}
          showRange={true}
          tickInterval={10}
          className="salary-slider"
          min={0}
          max={100}
          value={[0, 50]}
          onChange={tempOnChange}
          style={sliderStyle}
          ticks={[{ value: 30, label: 'jun' }]}
          aria-label="Set the salary range for charts"
          minInputProps={{ 'aria-label': 'Min salary' }}
          maxInputProps={{ 'aria-label': 'Max salary' }}
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiDualRange
          className="date-slider"
          min={0}
          max={100}
          value={[20, 80]}
          onChange={tempOnChange}
          style={sliderStyle}
          aria-label="Set the date range for charts"
          minInputProps={{ 'aria-label': 'Earliest date' }}
          maxInputProps={{ 'aria-label': 'Latest date' }}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default SlidersGroup;
