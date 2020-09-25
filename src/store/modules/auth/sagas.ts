import { Alert } from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Action } from 'redux';

import { AxiosResponse } from 'axios';
import api from '~/services/api';

import { signInSuccess, signFailure, signInRequest } from './actions';
import { ActionTypes } from './types';

type SignIn = ReturnType<typeof signInRequest>;

interface ISignInResponse {
  token: string;
}

export function* signIn({ payload }: SignIn): Generator {
  try {
    const { email, password } = payload;

    const response = yield call(() => {
      return api.post('sessions', {
        email,
        password,
      });
    });

    const {
      data: { token },
    } = response as AxiosResponse<ISignInResponse>;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados',
    );
    yield put(signFailure());
  }
}

export function* signInHomolog({ payload }: SignIn): Generator {
  const { email, password } = payload;

  console.tron.log(email, password);

  yield put(signInSuccess(email));
}

export function* setToken({ payload }: Action): Generator {
  if (!payload) return;

  const { token } = payload.auth;

  api.defaults.headers.Authorization = `Bearer ${token}`;

  yield true;
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(ActionTypes.SIGN_IN_REQUEST, signInHomolog),
]);
