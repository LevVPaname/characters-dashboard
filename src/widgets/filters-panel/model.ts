export interface CharacterFilters {
  name: string;
  status: string;
  species: string;
  gender: string;
}

export const EMPTY_FILTERS: CharacterFilters = {
  name: '',
  status: '',
  species: '',
  gender: ''
};
