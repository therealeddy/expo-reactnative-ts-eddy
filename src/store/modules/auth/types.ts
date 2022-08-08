export const ActionTypes = {
  SIGN_IN_REQUEST: '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: '@auth/SIGN_IN_SUCCESS',
  SIGN_FAILURE: '@auth/SIGN_FAILURE',
  SIGN_OUT: '@auth/SIGN_OUT',
};

export interface IAuthState {
  token: string;
  theme: 'light' | 'dark';
  signed: boolean;
  loading: boolean;
}
