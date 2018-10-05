import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';


export const requestAllItems = () => (dispatch) => (
  APIUtil.fetchAllItems()
    .then(pokemon => dispatch(receiveAllItems(pokemon)))
);

export const fetchOneItems = () => (dispatch) => (
  APIUtil.fetchOneItems()
    .then(pokemon => dispatch(receiveOneItems(pokemon)))
);

export const receiveAllItems = pokemon => ({ // array of pokemon objects
  type: RECEIVE_ALL_ITEMS,
  pokemon
});

export const receiveOneItems = pokemon => ({ // single pokemon object
  type: RECEIVE_ONE_ITEMS,
  pokemon
});
