import './App.css';
<<<<<<< Updated upstream
import React from 'react';
=======
import data from './data';
>>>>>>> Stashed changes
import Pokedex from './Pokedex';
import TypeBlock from './TypeBlock';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      singlePoke: data[0]
    }
    this.nextPokemonClick = this.nextPokemonClick.bind(this);
  }

  nextPokemonClick = () => {
    this.setState((estadoAtual, _props) => ({
      singlePoke: estadoAtual.singlePoke + 1
    }))
  }

    render() {
      return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={this.state.singlePoke} />
        <TypeBlock pokemons={data}/>
        <button onClick={this.nextPokemonClick} className="next-button">Próximo Pokemon</button>
      </div>
    );
  }
}


export default App;
