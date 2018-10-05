import React from 'react';

class PokemonDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pokemon: this.props.pokemon
    };
  }

  componentDidMount(){
    this.props.fetchOnePokemon(this.props.match.params.id);
  }
  render(){
    let pokemon = this.props.pokemon;
    if (pokemon) {
      return (
        <div>
          <li>{pokemon.name}</li>
          <li>{pokemon.attack}</li>
          <img src={pokemon.image_url} alt={pokemon.name}/>
        </div>
      );
    } else {
      return (
        <div>
          LOADING
        </div>
      );
    }
  }

}

export default PokemonDetail;
