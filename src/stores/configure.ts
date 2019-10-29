import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const isProduction = process.env.NODE_ENV === 'production';
const enhancer = isProduction
  ? compose(applyMiddleware(...middlewares))
  : compose(
    applyMiddleware(...middlewares),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default function configure(initialState?: object) {
  const store = createStore(
    reducers,
    initialState,
    enhancer,
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
