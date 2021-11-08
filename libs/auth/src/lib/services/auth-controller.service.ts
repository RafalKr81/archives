import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User as Auth0User } from '@auth0/auth0-spa-js';
import { Store } from '@ngrx/store';
import { distinctUntilChanged } from 'rxjs/operators';
import * as fromAuthUserActions from '../+states/auth-user.actions';
import { User } from '../+states/user.model';

@Injectable({ providedIn: 'root' })
export class AuthControllerService {
  constructor(private auth: AuthService, private store: Store) {}
  init() {
    console.log('AuthControllerService.init()');

    this.auth.user$
      .pipe(distinctUntilChanged())
      .subscribe((profile: Auth0User | null | undefined) => {
        console.log(
          'AuthControllerService user logged in:',
          JSON.stringify(profile, null, 2)
        );
        this.store.dispatch(
          fromAuthUserActions.loginUser({ user: this.convertUser(profile) })
        );
      });
  }

  private convertUser(profile: Auth0User | null | undefined): User | null {
    if (profile) {
      return {
        roles: undefined,
        name: profile.name,
        nickname: profile.nickname,
        email: profile.email,
        picture: profile.picture,
        familyName: profile.family_name,
        givenName: profile.given_name,
        locale: profile.locale,
      };
    } else {
      return null;
    }
  }
}
