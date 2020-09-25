import {
  createStore,
  applyMiddleware,
  compose,
  Store,
  StoreCreator,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducer from './persistReducers';

import { ApplicationState } from '~/@types/store';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

const enhacer: StoreCreator = __DEV__
  ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
  : applyMiddleware(sagaMiddleware);

const store: Store<ApplicationState> = (createStore(
  persistReducer(rootReducer),
  enhacer,
) as unknown) as Store<ApplicationState>;

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
