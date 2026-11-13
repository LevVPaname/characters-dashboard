import type { CharacterFilters } from './model';

import styles from './FiltersPanel.module.scss';

import { SearchIcon } from '@/shared/assets';
import { Input, Select } from '@/shared/components';
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS
} from '@/shared/constants';
import { classNames } from '@/shared/helpers';

interface FiltersPanelProps {
  value: CharacterFilters;
  onChange: (next: CharacterFilters) => void;
  className?: string;
}

export function FiltersPanel({
  value,
  onChange,
  className
}: FiltersPanelProps) {
  const update = <Key extends keyof CharacterFilters>(
    key: Key,
    next: CharacterFilters[Key]
  ) => {
    onChange({ ...value, [key]: next });
  };

  return (
    <div className={classNames(styles.FiltersPanel, className)}>
      <Input
        icon={<SearchIcon />}
        placeholder='Filter by name...'
        value={value?.name}
        onChange={(next) => update('name', next)}
      />

      <Select
        placeholder='Species'
        options={SPECIES_OPTIONS}
        value={value?.species}
        onChange={(next) => update('species', next)}
      />

      <Select
        placeholder='Gender'
        options={GENDER_OPTIONS}
        value={value?.gender}
        onChange={(next) => update('gender', next)}
      />

      <Select
        placeholder='Status'
        options={STATUS_OPTIONS}
        value={value?.status}
        onChange={(next) => update('status', next)}
      />
    </div>
  );
}
