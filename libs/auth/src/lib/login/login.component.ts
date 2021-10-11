import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'archives-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    public auth: AuthService
  ) // @Inject(DOCUMENT) private doc: Document
  {}

  onLogin(): void {
    console.log('user clicks login');
    this.auth.loginWithRedirect();
  }

  onLogout(): void {
    // console.log('DOC', this.doc.location.origin + '/auth/logout');
    // this.auth.logout({ returnTo: this.doc.location.origin + '/auth/logout' });
    this.auth.logout();
  }
}
