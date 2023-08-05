'use client';
import { EuiFlexItem, EuiFlexItemProps, EuiText } from '@elastic/eui';
import { FC } from 'react';

interface SkillFilterButtonProps extends EuiFlexItemProps {
  children: string;
  onClick: () => void;
  color: string;
  isDisabled: boolean;
}

const SkillFilterButton: FC<SkillFilterButtonProps> = ({
  onClick,
  isDisabled,
  color,
  children,
  ...props
}) => {
  return (
    <EuiFlexItem
      {...props}
      style={{
        backgroundColor: color,
        borderRadius: '50px',
        border: 'solid 0.5px',
        transition: 'background-color 0.2s ease, opacity 0.2s ease',
        opacity: isDisabled ? 0.3 : 1,
        maxWidth: 'max-content',
        paddingInline: '7px',
        marginLeft: '3px',
        marginRight: '3px',
      }}>
      <button onClick={onClick} disabled={isDisabled}>
        <EuiText size="s">{children}</EuiText>
      </button>
    </EuiFlexItem>
  );
};

export default SkillFilterButton;
