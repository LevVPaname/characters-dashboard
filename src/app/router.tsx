import { BrowserRouter, Route, Routes } from 'react-router';

import { CharacterDetails } from '../pages/character-details';
import { CharacterList } from '../pages/characters';
import { Layout } from '../widgets/layout';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={<CharacterList />}
          />
          <Route
            path='characters/:characterId'
            element={<CharacterDetails />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
