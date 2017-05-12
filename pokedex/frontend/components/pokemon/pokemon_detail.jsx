import React from 'react';
import ItemDetailContainer from './item_detail_container';
import { Route, Link } from 'react-router-dom';

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
    let itemDetail;
    const {pokemonDetail} = this.props;
    if (pokemonDetail.items) {
      itemDetail = pokemonDetail.items.map((item) =>
      <section key={item.id}>
      <Link to={`/pokemon/${pokemonDetail.id}/items/${item.id}`}>
        <img src={item.image_url} />
      </Link>
    </section>
    );}
    return (
      <section className="pokemonDetail">
        <img src={pokemonDetail.image_url} alt={pokemonDetail.name} />
        <ul>
          <li>{pokemonDetail.name}</li>
          <li>Type: {pokemonDetail.type}</li>
          <li>Attack: {pokemonDetail.attack}</li>
          <li>Defense:{pokemonDetail.defense}</li>
          <li>Moves: {pokemonDetail.moves}</li>
          <h2>Items</h2>
          <ul className="items">
            {itemDetail}
          </ul>
        </ul>
        <Route path="/pokemon/:pokemonId/items/:itemId"
          component={ItemDetailContainer} />
      </section>
    );
  }

}

export default PokemonDetail;
