import {connect} from 'react-redux';
import {requestAllPokemon} from '../../actions/pokemon_action';
import PokemonIndex from './pokemon_index';
import {selectAllPokemon} from '../../reducers/selectors';

const mapStateToProps = state => ({
  // piece of state that container subscribes to
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())// dispatch requestAllPokemon action.
});

const PokemonIndexContainer = connect(mapStateToProps,
  mapDispatchToProps)(PokemonIndex);

export default PokemonIndexContainer; 
