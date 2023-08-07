'use client';
import {
  EuiFlexItem,
  EuiFlexItemProps,
  EuiText,
  useEuiTheme,
} from '@elastic/eui';
import { FC } from 'react';
import { SkillType, useFiltersStore } from '../../../../state/stores';

interface SkillFilterButtonProps extends EuiFlexItemProps {
  jobSkill: SkillType;
}

const SkillFilterButton: FC<SkillFilterButtonProps> = ({
  jobSkill,
  ...props
}) => {
  const selectedFilters = useFiltersStore(state => state.selectedSkillFilers);
  const toggleFilter = useFiltersStore(
    state => state.toggleSelectedSkillFilter
  );

  const { euiTheme } = useEuiTheme();
  const isFiltered = selectedFilters.includes(jobSkill);
  const isAllSelected = selectedFilters.includes(SkillType.ALL);
  const deselectedColor = euiTheme.colors.primary;
  const selectedColor = euiTheme.colors.success;
  const isDisabled = !(jobSkill === SkillType.ALL) && isAllSelected;

  return (
    <EuiFlexItem
      // grow={false}
      style={{
        backgroundColor: isFiltered ? selectedColor : deselectedColor,
        borderRadius: '50px',
        border: 'solid 0.5px',
        transition: 'background-color 0.2s ease, opacity 0.2s ease',
        opacity: isDisabled ? 0.3 : 1,
        paddingInline: '7px',
        marginLeft: '3px',
        marginRight: '3px',
        width: 'max-content',
        flexShrink: 1,
        minWidth: '3rem',
        minHeight: '1.5rem',
        maxHeight: '1.5rem',
        maxWidth: 'max-content',
      }}
      {...props}>
      <button
        onClick={() => {
          toggleFilter(jobSkill);
        }}
        disabled={isDisabled}>
        <EuiText
          size="s"
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
          {jobSkill}
        </EuiText>
      </button>
    </EuiFlexItem>
  );
};

export default SkillFilterButton;
