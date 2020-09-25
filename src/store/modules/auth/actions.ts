import { Action } from 'redux';
import { ActionTypes } from './types';

export function signInRequest(email: string, password: string): Action {
  return {
    type: ActionTypes.SIGN_IN_REQUEST,
    payload: {
      email,
      password,
    },
  };
}

export function signInSuccess(token: string): Action {
  return {
    type: ActionTypes.SIGN_IN_SUCCESS,
    payload: { token },
  };
}

export function signFailure(): Action {
  return {
    type: ActionTypes.SIGN_FAILURE,
  };
}

export function signOut(): Action {
  return {
    type: ActionTypes.SIGN_OUT,
  };
}
