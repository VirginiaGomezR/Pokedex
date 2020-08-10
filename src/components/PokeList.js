import React from 'react';
import PropTypes from 'prop-types';
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

PokeList.propTypes = {
  pokemons: PropTypes.array,
  
};
export default PokeList;
