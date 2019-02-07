import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import quiz1 from './reducers/quiz1';
import quiz2 from './reducers/quiz2';

export default () => {
  const store = createStore(
    combineReducers({
      quiz1 : quiz1,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
