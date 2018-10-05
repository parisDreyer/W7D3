import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';


export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const fetchOnePokemon = (id) => (dispatch) => (
  APIUtil.fetchOnePokemon(id)
    .then(pokemon => dispatch(receiveOnePokemon(pokemon)))
);

export const receiveAllPokemon = pokemon => ({ // array of pokemon objects
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveOnePokemon = payload => ({ // single payload object
  type: RECEIVE_ONE_POKEMON,
  payload
});
