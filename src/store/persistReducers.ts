import AsyncStorage from '@react-native-community/async-storage';
import { Reducer } from 'redux';

import { persistReducer } from 'redux-persist';

const nameReducer = process.env.REACT_APP_PERSIST_REDUCER || 'root';

export default (reducers: Reducer): Reducer => {
  const persistedReducer = persistReducer(
    {
      key: nameReducer,
      storage: AsyncStorage,
      whitelist: ['auth'],
    },
    reducers,
  );
  return persistedReducer;
};
