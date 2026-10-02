import { useNavigate, useParams } from 'react-router';

import './CharacterDetails.css';

import { ArrowLeftIcon } from '@/shared/assets';
import { Loader } from '@/shared/ui/loader';

export function CharacterDetails() {
  const navigate = useNavigate();
  const { characterId } = useParams();

  return (
    <div className='CharacterDetails'>
      <button
        type='button'
        className='CharacterDetails__GoBackButton'
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
