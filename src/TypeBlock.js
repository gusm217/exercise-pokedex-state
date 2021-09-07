import React from 'react';
import pokemons from './data';

class TypeBlock extends React.Component {
  render() {
    return (
      <div>
        {this.props.pokemons.map(pokemon => pokemon.type)}
      </div>
    )
  }
}

export default TypeBlock;