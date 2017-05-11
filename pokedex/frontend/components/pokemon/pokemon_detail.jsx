import React from 'react';

class PokemonDetail extends React.Component {
  componentWillReceiveProps(newProps) {
    if (newProps.match.params.pokemonId != this.props.pokemonDetail.id) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  render () {
    return (
      <section className="pokemonDetail">
        <img src={this.props.pokemonDetail.image_url} alt={this.props.pokemonDetail.name} />
        <ul>
          <li>{this.props.pokemonDetail.name}</li>
          <li>Type: {this.props.pokemonDetail.type}</li>
          <li>Attack: {this.props.pokemonDetail.attack}</li>
          <li>Defense:{this.props.pokemonDetail.defense}</li>
          <li>Moves: {this.props.pokemonDetail.moves}</li>
        </ul>
      </section>
    );
  }

}

export default PokemonDetail;
