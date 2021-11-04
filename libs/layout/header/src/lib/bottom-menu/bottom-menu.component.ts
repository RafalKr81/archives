import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'arc-layout-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomMenuComponent {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomMenuComponent>,
    private auth: AuthService
  ) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  onLogout() {
    this.auth.logout();
  }
}
