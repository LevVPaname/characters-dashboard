import { useState } from 'react';

import styles from './CharacterCard.module.scss';

import { CheckedIcon, XIcon } from '@/shared/assets';
import { Input, Select, StatusIndicator } from '@/shared/components';
import { STATUS_OPTIONS } from '@/shared/constants';
import { classNames } from '@/shared/helpers';
import type { Character, CharacterStatus } from '@/shared/types';

interface CharacterCardEditProps {
  character: Character;
  onSave: (character: Character) => void;
  onCancel: () => void;
}

export function CharacterCardEdit({
  character,
  onSave,
  onCancel
}: CharacterCardEditProps) {
  const [draft, setDraft] = useState<Character>(character);

  const { image, name, gender, species } = character;

  const updateName = (next: string) => {
    setDraft((prev) => ({ ...prev, name: next }));
  };

  const updateLocationName = (next: string) => {
    setDraft((prev) => ({
      ...prev,
      location: { ...prev.location, name: next }
    }));
  };

  const updateStatus = (next: CharacterStatus) => {
    setDraft((prev) => ({ ...prev, status: next }));
  };

  return (
    <article className={styles.Card}>
      <img
        className={styles.Image}
        src={image}
        alt={name}
      />

      <div className={styles.Content}>
        <div className={styles.Header}>
          <Input
            variant='underlined'
            value={draft.name}
            onChange={updateName}
          />

          <div className={styles.Actions}>
            <button
              type='button'
              className={classNames(
                styles.IconButton,
                styles['IconButton--strong']
              )}
              onClick={onCancel}
              aria-label='Cancel editing'
            >
              <XIcon />
            </button>
            <button
              type='button'
              className={classNames(
                styles.IconButton,
                styles['IconButton--strong']
              )}
              onClick={() => onSave(draft)}
              aria-label='Save character'
            >
              <CheckedIcon />
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
            <Input
              size='small'
              variant='underlined'
              value={draft.location.name}
              onChange={updateLocationName}
            />
          </div>
          <div className={styles.Row}>
            <span className={styles.Term}>Status</span>
            <Select
              className={styles.StatusSelect}
              size='small'
              options={STATUS_OPTIONS}
              value={draft.status}
              onChange={(next) => updateStatus(next as CharacterStatus)}
              getOptionCustom={(option) => (
                <StatusIndicator status={option.value as CharacterStatus} />
              )}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
