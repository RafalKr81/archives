import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'arc-layout-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMenuComponent {
  constructor(private auth: AuthService) {}

  onLogout(): void {
    this.auth.logout();
  }
}
