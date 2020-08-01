import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    return (
      <ul className="list">
        {this.props.pokemons.map((item, id) => (
          <Pokemon key={id} data={item} />
        ))}
      </ul>
    );
  }
}
export default PokeList;
