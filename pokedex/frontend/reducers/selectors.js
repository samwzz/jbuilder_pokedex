import { values } from 'lodash';

export const selectAllPokemon = ({ pokemon }) => (
  values(pokemon)
);

export const selectSinglePokemon = ({ pokemonDetail }) => (
  pokemonDetail
);

export const selectPokemonItem = ( { pokemonDetail }, itemId ) => {
  if (pokemonDetail.items) {
    const foundItem = pokemonDetail.items.find(item => (item.id == itemId));
    return foundItem || {};
  }
};
