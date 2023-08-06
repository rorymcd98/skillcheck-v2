import { FC } from 'react';
import { SkillType } from '../../../../state/stores';
import SkillFilterButton from './SkillFilterButton';
import { EuiFlexGroup } from '@elastic/eui';

const SkillTypeFilters: FC = () => {
  const skillFilterButtons = [];

  for (const currentSkill of Object.values(SkillType)) {
    skillFilterButtons.push(
      <SkillFilterButton key={currentSkill} jobSkill={currentSkill} />
    );
  }

  return (
    <EuiFlexGroup
      gutterSize="s"
      wrap={true}
      responsive={false}
      style={{ padding: '1rem', overflow: 'scroll' }}
      justifyContent="flexStart">
      {skillFilterButtons}
    </EuiFlexGroup>
  );
};

export default SkillTypeFilters;
