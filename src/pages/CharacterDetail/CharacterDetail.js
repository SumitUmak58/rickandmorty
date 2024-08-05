// src/pages/CharacterDetail/CharacterDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../../services/api';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacterById(id).then((res) => {
      setCharacter(res.data);
    });
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <p>{character.species} - {character.gender}</p>
      <p>Status: {character.status}</p>
      <h2>Origin</h2>
      <p>{character.origin.name}</p>
      <h2>Location</h2>
      <p>{character.location.name}</p>
      <h2>Episodes</h2>
      <ul>
        {character.episode.map((ep) => (
          <li key={ep}>{ep}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;
