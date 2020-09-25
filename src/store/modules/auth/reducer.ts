import { Reducer } from 'redux';
import produce from 'immer';
import { IAuthState, ActionTypes } from './types';

const INITIAL_STATE: IAuthState = {
  token: '',
  signed: false,
  loading: false,
};

type ReturnReducer = Reducer<IAuthState>;

const auth: ReturnReducer = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }
      case ActionTypes.SIGN_IN_SUCCESS: {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case ActionTypes.SIGN_FAILURE: {
        draft.loading = false;
        break;
      }
      case ActionTypes.SIGN_OUT: {
        draft.token = '';
        draft.signed = false;
        break;
      }
      default:
        break;
    }
  });
};

export default auth;
