import { useState } from 'react';

import { CharacterCardEdit } from './CharacterCardEdit';
import { CharacterCardView } from './CharacterCardView';

import type { Character } from '@/shared/types';

export type CharacterCardMode = 'view' | 'edit';

interface CharacterCardProps {
  character: Character;
  onSave?: (character: Character) => void;
}

export function CharacterCard({ character, onSave }: CharacterCardProps) {
  const [mode, setMode] = useState<CharacterCardMode>('view');

  if (mode === 'edit') {
    return (
      <CharacterCardEdit
        character={character}
        onCancel={() => setMode('view')}
        onSave={(next) => {
          onSave?.(next);
          setMode('view');
        }}
      />
    );
  }

  return (
    <CharacterCardView
      character={character}
      onEdit={() => setMode('edit')}
    />
  );
}
