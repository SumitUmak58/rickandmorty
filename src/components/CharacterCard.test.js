 
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CharacterCard from './CharacterCard';

test('renders character card', () => {
  const character = {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  };
  const { getByText, getByAltText } = render(
    <Router>
      <CharacterCard character={character} />
    </Router>
  );
  expect(getByText('Rick Sanchez')).toBeInTheDocument();
  expect(getByAltText('Rick Sanchez')).toBeInTheDocument();
});
