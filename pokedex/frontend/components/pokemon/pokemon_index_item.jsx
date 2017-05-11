import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = ({ pokemon }) => (
  <Link to={`/pokemon/${pokemon.id}`}>
    <li key={pokemon.id}>
      {pokemon.name}
      <img src={pokemon.image_url} alt={pokemon.name}/>
    </li>
  </Link>
);
