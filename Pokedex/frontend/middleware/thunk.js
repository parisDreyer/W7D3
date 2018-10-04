// frontend/store/store.js
import thunk from '../middleware/thunk';

const thunkMiddleware = ({dispatch, getState }) => next => action => {
  if (typeof action === 'function'){
    return action(dispatch, getState);
  }
  return next(action);
};

export default thunkMiddleware;
