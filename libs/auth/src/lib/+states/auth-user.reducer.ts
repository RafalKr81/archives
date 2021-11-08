import { createReducer, on } from '@ngrx/store';
import * as fromAuthUserActions from './auth-user.actions';
import { User } from './user.model';

export interface AuthUserState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialAuthUserState: AuthUserState = {
  user: null,
  isAuthenticated: false,
};

export const authUserReducer = createReducer(
  initialAuthUserState,
  on(fromAuthUserActions.loginUser, (state, { user }) => ({
    user,
    isAuthenticated: user ? true : false,
  }))
);
