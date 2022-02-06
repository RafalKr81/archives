// create Service
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { authUserSelectors } from './auth-user.selectors';
import { User } from './user.model';
import { filterNullish } from '@archives/shared/functions';

@Injectable()
export class AuthFacade {
  getUser(): Observable<User> {
    return this.store.pipe(
      select(authUserSelectors.selectAuthUser),
      filterNullish()
    );
  }

  constructor(private store: Store) {}
}
