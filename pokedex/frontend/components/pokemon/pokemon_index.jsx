import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemonItems = this.props.pokemon.map((poke) =>
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    );
    return (
      <section className="pokedex">
        <ul>
          {pokemonItems}
        </ul>
        <Route path="/pokemon/:pokemonId" component={ PokemonDetailContainer }></Route>
      </section>
    );
  }
}

export default PokemonIndex;
