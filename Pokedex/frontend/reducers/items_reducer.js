import { RECEIVE_ALL_ITEMS  } from '../actions/item_action';
import { RECEIVE_ONE_POKEMON} from '../actions/pokemon_action';
import merge from 'lodash/merge';

const itemReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_ITEMS:
      return action.items;
    case RECEIVE_ONE_POKEMON:
      return action.payload.items;
    default:
      return state;
  }

};

export default itemReducer;
