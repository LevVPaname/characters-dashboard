import { useNavigate, useParams } from 'react-router';

import styles from './CharacterDetails.module.scss';

import { ArrowLeftIcon } from '@/assets';
import { Loader } from '@/shared/components/loader';

export function CharacterDetails() {
  const navigate = useNavigate();
  const { characterId } = useParams();

  return (
    <div className={styles.CharacterDetails}>
      <button
        type='button'
        className={styles.CharacterDetails__GoBackButton}
        onClick={() => navigate(-1)}
      >
        <ArrowLeftIcon />
        GO BACK
      </button>

      <p>Character id: {characterId}</p>
      <Loader
        size='large'
        label='Loading character card...'
      />
    </div>
  );
}
