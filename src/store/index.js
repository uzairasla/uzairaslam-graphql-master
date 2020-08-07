import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux-starter-kit';
import sagas from './sagas/sagas';
import WeatherReducer from './reducers/weatherReducer';
import MetricsReducer from './reducers/metricsReducer';

const reducer = combineReducers({
  weather: WeatherReducer,
  metric: MetricsReducer,
});

export default () => {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(reducer, composeEnhancers(middlewares));

  sagaMiddleware.run(sagas);

  return store;
};
