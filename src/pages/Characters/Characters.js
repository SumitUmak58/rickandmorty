// src/pages/Characters/Characters.js
import React, { useState, useEffect } from 'react';
import { getCharacters } from '../../services/api';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2%;
`;

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});

  useEffect(() => {
    getCharacters({ name: search, ...filters }).then((res) => {
      setCharacters(res.data.results);
    });
  }, [search, filters]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search characters"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* Add filter components here */}
      <Grid>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Grid>
    </div>
  );
};

export default Characters;
