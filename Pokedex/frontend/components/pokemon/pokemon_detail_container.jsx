import { connect } from 'react-redux';
import {fetchOnePokemon} from '../../actions/pokemon_action';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
      pokemon: state.entities.pokemon[ownProps.match.params.id]
    };

};

const mapDispatchToProps = dispatch => ({
  fetchOnePokemon: (id) => dispatch(fetchOnePokemon(id))
});

const PokemonDetailContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
export default PokemonDetailContainer;


// import {connect} from 'react-redux';
// import {requestAllPokemon} from '../../actions/pokemon_action';
// import PokemonIndex from './pokemon_index';
// import {selectAllPokemon} from '../../reducers/selectors';
//
// const mapStateToProps = state => ({
//   // piece of state that container subscribes to
//   pokemon: selectAllPokemon(state)
// });
//
// const mapDispatchToProps = dispatch => ({
//   requestAllPokemon: () => dispatch(requestAllPokemon())// dispatch requestAllPokemon action.
// });
//
// const PokemonIndexContainer = connect(mapStateToProps,
//   mapDispatchToProps)(PokemonIndex);
//
// export default PokemonIndexContainer;
