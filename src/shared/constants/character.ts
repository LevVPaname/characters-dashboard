import type { CharacterGender, CharacterStatus } from '../types';

export interface SelectOption<T extends string = string> {
  label: string;
  value: T;
}

export const STATUS_OPTIONS: SelectOption<CharacterStatus>[] = [
  { label: 'Alive', value: 'Alive' },
  { label: 'Dead', value: 'Dead' },
  { label: 'Unknown', value: 'unknown' }
];

export const SPECIES_OPTIONS: SelectOption[] = [
  { label: 'Human', value: 'Human' },
  { label: 'Alien', value: 'Alien' },
  { label: 'Humanoid', value: 'Humanoid' },
  { label: 'Animal', value: 'Animal' },
  { label: 'Robot', value: 'Robot' },
  { label: 'Cronenberg', value: 'Cronenberg' },
  { label: 'Disease', value: 'Disease' },
  { label: 'Unknown', value: 'Unknown' }
];

export const GENDER_OPTIONS: SelectOption<CharacterGender>[] = [
  { label: 'Female', value: 'Female' },
  { label: 'Male', value: 'Male' },
  { label: 'Genderless', value: 'Genderless' },
  { label: 'Unknown', value: 'unknown' }
];
