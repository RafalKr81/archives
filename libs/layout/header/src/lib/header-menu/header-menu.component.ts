import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '@archives/auth';

@Component({
  selector: 'arc-layout-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMenuComponent {
  @Input()
  user: User | null;

  constructor(private auth: AuthService) {}

  onLogout(): void {
    this.auth.logout();
  }
}
