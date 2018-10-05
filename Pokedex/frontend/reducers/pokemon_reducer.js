import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_action';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_ONE_POKEMON:
      let pokemon = action.payload.pokemon;
      nextState[pokemon.id] = pokemon;
      return nextState;
    default:
      return state;
  }

};

export default pokemonReducer;
