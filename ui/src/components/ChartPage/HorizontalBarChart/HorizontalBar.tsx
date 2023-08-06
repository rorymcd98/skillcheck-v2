import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlexItemProps,
  EuiText,
} from '@elastic/eui';
import { FC } from 'react';

interface HorizontalBarProps extends EuiFlexItemProps {
  percent: number;
  valueText?: string;
  flair?: string;
  HorizontalBarColor?: string;
}

const HorizontalBar: FC<HorizontalBarProps> = ({
  percent,
  valueText,
  flair,
  HorizontalBarColor,
  ...props
}) => {
  return (
    <EuiFlexItem
      className="horizontal-bar"
      grow={false}
      style={{ width: '100%' }}
      {...props}>
      <EuiFlexGroup
        className="horizontal-bar_group"
        gutterSize="s"
        alignItems="center"
        style={{ width: '100%' }}
        responsive={false}>
        <EuiFlexItem grow={false} style={{ width: `${percent}%` }}>
          <div
            className="horizontal-bar_bar"
            style={{
              height: '100%',
              backgroundColor: HorizontalBarColor,
              alignItems: 'center',
              borderRadius: '500px',
            }}>
            <EuiText
              className="horizontal-bar_text"
              size="s"
              textAlign="left"
              style={{
                marginLeft: '0.5rem',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}>
              {valueText}
            </EuiText>
          </div>
        </EuiFlexItem>
        <EuiText className="horizontal-bar_flair" size="s" textAlign="left">
          {flair}
        </EuiText>
      </EuiFlexGroup>
    </EuiFlexItem>
  );
};

export default HorizontalBar;
