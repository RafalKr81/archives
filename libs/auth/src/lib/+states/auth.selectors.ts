import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, AUTH_STATE_NAME } from './auth.reducer';

export const selectAuthState =
  createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const selectAuthSessionState = createSelector(
  selectAuthState,
  (state: AuthState) => state.session
);
