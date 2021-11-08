import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const loginUser = createAction(
  '[Auth User] Login User',
  props<{ user: User | null }>()
);
