import { ActionReducerMap } from '@ngrx/store';
import * as fromAuthUserReducer from './auth-user.reducer';

export const AUTH_STATE_NAME = 'auth';

export interface AuthState {
  session: fromAuthUserReducer.AuthUserState;
}

export const authReducer: ActionReducerMap<AuthState> = {
  session: fromAuthUserReducer.authUserReducer,
};
