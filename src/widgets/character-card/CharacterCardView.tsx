import { Link } from 'react-router';

import styles from './CharacterCard.module.scss';

import { EditIcon } from '@/shared/assets';
import { Status } from '@/shared/components';
import { classNames } from '@/shared/helpers';
import type { Character } from '@/shared/types';

interface CharacterCardViewProps {
  character: Character;
  onEdit: () => void;
}

export function CharacterCardView({
  character,
  onEdit
}: CharacterCardViewProps) {
  const { id, image, name, gender, species, location, status } = character;

  return (
    <article className={styles.Card}>
      <img
        className={styles.Image}
        src={image}
        alt={name}
      />

      <div className={styles.Content}>
        <div className={styles.Header}>
          <Link
            className={styles.Name}
            to={`/characters/${id}`}
          >
            {name}
          </Link>

          <div className={styles.Actions}>
            <button
              type='button'
              className={classNames(
                styles.IconButton,
                styles['IconButton--ghost']
              )}
              onClick={onEdit}
              aria-label='Edit character'
            >
              <EditIcon />
            </button>
          </div>
        </div>

        <div className={styles.Info}>
          <div className={styles.Row}>
            <span className={styles.Term}>Gender</span>
            <span className={styles.Description}>{gender}</span>
          </div>
          <div className={styles.Row}>
            <span className={styles.Term}>Species</span>
            <span className={styles.Description}>{species}</span>
          </div>
          <div className={styles.Row}>
            <span className={styles.Term}>Location</span>
            <span className={styles.Description}>{location.name}</span>
          </div>
          <div className={styles.Row}>
            <span className={styles.Term}>Status</span>
            <span className={styles.Description}>
              <Status status={status} />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
