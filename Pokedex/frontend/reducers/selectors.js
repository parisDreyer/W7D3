import values from 'lodash/values';

// export const selectAllPokemon = (pokemon) => Object.values(pokemon);

export const selectAllPokemon = state => {
  // console.log(state);
  return values(state.entities.pokemon);
};


export const selectAllItems = state => {
  return values(state.entitites.items);
};

export const selectPokemonItems = (state, pokemon ) => {
  let ids = pokemon.item_ids;
  return ids.map(id => state.entities.items[id]);
};
