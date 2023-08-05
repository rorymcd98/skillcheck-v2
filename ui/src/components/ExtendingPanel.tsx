import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiPanelProps,
} from '@elastic/eui';
import { FC } from 'react';

type ExtendingPanelProps = EuiPanelProps & {
  proportion: number;
  child1: React.ReactNode;
  child2: React.ReactNode;
};

const ExtendingPanel: FC<ExtendingPanelProps> = ({ proportion, ...props }) => {
  const basePoportionStyle = {
    transition: 'width 0.3s ease',
    overflow: 'hidden',
  };
  const proportionStyle1 = {
    ...basePoportionStyle,
    width: `${Math.min(100, proportion * 100)}%`,
    grow: 1,
  };
  const proportionStyle2 = {
    ...basePoportionStyle,
    width: `${Math.max(0, (1 - proportion) * 100)}%`,
    grow: 2,
  };
  return (
    <EuiPanel className="extending-panel" {...props}>
      <EuiFlexGroup
        className="extending-panel_group"
        gutterSize="none"
        responsive={false}
        style={{ minWidth: 0 }}>
        <EuiFlexItem
          className="extending-panel_child1"
          grow={false}
          style={proportionStyle1}>
          {props.child1}
        </EuiFlexItem>
        <EuiFlexItem
          className="extending-panel_child2"
          grow={false}
          style={proportionStyle2}>
          {props.child2}
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
  );
};

export default ExtendingPanel;
