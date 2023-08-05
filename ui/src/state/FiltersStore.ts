'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { produce } from 'immer';

export enum SkillType {
  ALL = 'All',
  LANGUAGE = 'Language',
  FRAMEWORK = 'Framework',
  LIBRARY = 'Library',
  DATABASE = 'Database',
  PLATFORM = 'Platform',
}

export type FiltersStore = {
  selectedSkillFilers: SkillType[];
  toggleSelectedSkillFilter: (skillType: SkillType) => void;
};

export const useFiltersStore = create<FiltersStore>()(
  persist(
    set => ({
      selectedSkillFilers: [SkillType.ALL],
      toggleSelectedSkillFilter: (skillType: SkillType) => {
        set(
          produce<FiltersStore>(state => {
            if (state.selectedSkillFilers.includes(skillType)) {
              state.selectedSkillFilers = state.selectedSkillFilers.filter(
                filter => filter !== skillType
              );
            } else {
              state.selectedSkillFilers.push(skillType);
            }
          })
        );
      },
    }),
    {
      name: 'filters-store',
    }
  )
);
