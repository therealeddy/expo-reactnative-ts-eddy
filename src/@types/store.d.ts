import { IAuthState } from '../store/modules/auth/types';

export interface ApplicationState {
  auth: IAuthState;
}

declare global {
  export type Store = ApplicationState;
}

export default global;
