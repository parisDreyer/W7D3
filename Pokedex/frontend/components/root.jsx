import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import { Switch, HashRouter, Route } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact to path="/" component={PokemonIndexContainer} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default Root;

// <Route path="/pokemon/:id" component={PokemonDetailContainer} />


// <PokemonIndexContainer />
