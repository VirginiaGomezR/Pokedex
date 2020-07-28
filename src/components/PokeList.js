import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    return (
      <ul className="list">
        {this.props.pokemons.map((item, index) => (
          <Pokemon key={index} data={item} />
        ))}
      </ul>
    );
  }
}
export default PokeList;
