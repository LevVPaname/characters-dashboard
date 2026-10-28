import { type ReactNode, useState } from 'react';
import { Link } from 'react-router';

import styles from './CharacterCard.module.scss';

import { EditIcon, XIcon } from '@/assets';
import { Status } from '@/shared/components/status';
import type { Character } from '@/shared/types';

export type CharacterCardMode = 'view' | 'edit';

interface CharacterCardProps {
  character: Character;
}

interface RowProps {
  label: string;
  children: ReactNode;
}

function Row({ label, children }: RowProps) {
  return (
    <div className={styles.Row}>
      <span className={styles.Term}>{label}</span>
      <span className={styles.Description}>{children}</span>
    </div>
  );
}

export function CharacterCard({ character }: CharacterCardProps) {
  const [mode, setMode] = useState<CharacterCardMode>('view');

  const { id, image, name, gender, species, location, status } = character;

  return (
    <article className={styles.Card}>
      <img
        className={styles.Image}
        src={image}
        alt={name}
      />

      <div className={styles.Content}>
        {mode === 'view' && (
          <>
            <Link
              className={styles.Name}
              to={`/characters/${id}`}
            >
              {name}
            </Link>

            <div className={styles.Info}>
              <Row label='Gender'>{gender}</Row>
              <Row label='Species'>{species}</Row>
              <Row label='Location'>{location.name}</Row>
              <Row label='Status'>
                <Status status={status} />
              </Row>
            </div>

            <button
              type='button'
              className={styles.EditButton}
              onClick={() => setMode('edit')}
              aria-label='Edit character'
            >
              <EditIcon />
            </button>
          </>
        )}
        {mode === 'edit' && (
          <>
            <p className={styles.EditPlaceholder}>Режим редактирования</p>
            <button
              type='button'
              className={styles.CancelButton}
              onClick={() => setMode('view')}
              aria-label='Cancel editing'
            >
              <XIcon />
            </button>
          </>
        )}
      </div>
    </article>
  );
}
