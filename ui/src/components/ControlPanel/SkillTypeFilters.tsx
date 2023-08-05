'use client';
import { FC } from 'react';
import { SkillType, useFiltersStore } from '../../state/FiltersStore';
import SkillFilterButton from './SkillFilterButton';
import { EuiFlexGroup, useEuiTheme } from '@elastic/eui';

const SkillTypeFilters: FC = () => {
  const selectedFilters = useFiltersStore(state => state.selectedSkillFilers);
  const toggleFilter = useFiltersStore(
    state => state.toggleSelectedSkillFilter
  );

  const { euiTheme } = useEuiTheme();
  const skillFilterButtons = [];
  const deselectedColor = euiTheme.colors.primary;
  const selectedColor = euiTheme.colors.success;

  for (const currentSkill of Object.values(SkillType)) {
    const isFiltered = selectedFilters.includes(currentSkill);
    const isAllSelected = selectedFilters.includes(SkillType.ALL);
    skillFilterButtons.push(
      <SkillFilterButton
        key={currentSkill}
        isDisabled={currentSkill !== SkillType.ALL && isAllSelected}
        onClick={() => toggleFilter(currentSkill)}
        color={isFiltered ? selectedColor : deselectedColor}>
        {currentSkill}
      </SkillFilterButton>
    );
  }

  return (
    <EuiFlexGroup gutterSize="s" wrap={true} responsive={false}>
      {skillFilterButtons}
    </EuiFlexGroup>
  );
};

export default SkillTypeFilters;
