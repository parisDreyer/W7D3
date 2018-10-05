import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Link, Route} from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component{

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const { pokemon } = this.props;
    let pokeIndexItems = pokemon.map( el => <li>
      <Link to={"/pokemon/" + el.id}>
      <PokemonIndexItem key={el.id} pokemon={el} /></Link>
    </li>);
    // debugger;
    return(

      <section>
        <Route path="/pokemon/:id" component={PokemonDetailContainer} />
      <ul>
        {pokeIndexItems}
      </ul>
      </section>
    );
  }



}
export default PokemonIndex;
