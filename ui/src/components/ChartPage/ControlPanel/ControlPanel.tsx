import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiPanelProps,
  EuiSpacer,
  EuiText,
} from '@elastic/eui';
import { FC } from 'react';
import SkillTypeFilters from './SkillTypeFilters/SkillTypeFilters';
import SlidersGroup from './Sliders/SlidersGroup';
import VerticalBar from './VerticalBar';
import ChartTypeSelectionGroup from './ChartTypeSelection/ChartTypeSelectionGroup';

type ControlPanelProps = EuiPanelProps & {
  sliders?: string; // TODO
  //sorters
};

const ControlPanel: FC<ControlPanelProps> = ({ ...props }) => {
  return (
    <EuiPanel paddingSize="s" {...props}>
      <EuiText>Control Panel</EuiText>
      {/* TODO - Make header */}
      <EuiSpacer size="xs" />
      <EuiFlexGroup
        responsive={false}
        style={{ maxHeight: '9rem', paddingLeft: '0.5rem' }}>
        <EuiFlexItem grow={1}>
          <ChartTypeSelectionGroup />
        </EuiFlexItem>
        <VerticalBar />
        <EuiFlexItem grow={4}>
          <SkillTypeFilters />
        </EuiFlexItem>
        <VerticalBar />
        <EuiFlexItem grow={5}>
          <SlidersGroup />
        </EuiFlexItem>
        <VerticalBar />
        <EuiFlexItem grow={3}>div</EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
  );
};

export default ControlPanel;
