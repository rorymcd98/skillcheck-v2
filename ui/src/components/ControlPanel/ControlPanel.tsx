import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiPanelProps,
} from '@elastic/eui';
import { FC } from 'react';
import SkillTypeFilters from './SkillTypeFilters';

type ControlPanelProps = EuiPanelProps & {
  sliders?: string; // TODO
  //sorters
};

const ControlPanel: FC<ControlPanelProps> = ({ ...props }) => {
  return (
    <EuiPanel {...props}>
      <EuiFlexGroup responsive={false}>
        <EuiFlexItem>
          <SkillTypeFilters />
        </EuiFlexItem>
        <EuiFlexItem>div</EuiFlexItem>
        <EuiFlexItem>div</EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
  );
};

export default ControlPanel;
