// src/components/CharacterCard/CharacterCard.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
`;

const CharacterCard = ({ character }) => (
  <Card>
    <Link to={`/character/${character.id}`}>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
    </Link>
  </Card>
);

export default CharacterCard;
