import { createSelector } from '@ngrx/store';
import { selectAuthSessionState } from './auth.selectors';

const selectAuthUser = createSelector(
  selectAuthSessionState,
  (state) => state.user
);

export const authUserSelectors = {
  selectAuthUser,
};
