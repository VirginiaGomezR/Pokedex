import React from 'react';
import PokemonData from '../data/Data';
import PokeList from './PokeList';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: PokemonData,
    };
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Mi lista de pokemon</h1>
        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
