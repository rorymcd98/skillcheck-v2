import { EuiFlexItem, useEuiTheme } from '@elastic/eui';
import { FC } from 'react';

const VerticalBar: FC = () => {
  const { euiTheme } = useEuiTheme();
  const barColor = euiTheme.colors.lightShade;
  const boxShadow = `1px 2px 2px 0px ${euiTheme.colors.lightShade}`;
  return (
    <EuiFlexItem grow={false}>
      <div
        style={{
          backgroundColor: barColor,
          border: 'solid 0.5px',
          borderColor: barColor,
          borderRadius: '50px',
          height: '100%',

          boxShadow: boxShadow,
        }}
      />
    </EuiFlexItem>
  );
};

export default VerticalBar;
