// frontend/store/store.js
import thunk from '../middleware/thunk';

const thunkMiddleware = ({dispatch, getSTate }) => next => action => {
  if (typeof action === 'function'){
    return action(dispatch, getState);
  }
  return next(action);
};

export default thunkMiddleware; 
