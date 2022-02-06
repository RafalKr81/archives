import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { User } from '@archives/auth';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'arc-layout-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomMenuComponent {
  user$: Observable<User>;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomMenuComponent>,
    private auth: AuthService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { user$: Observable<User> }
  ) {
    this.user$ = data.user$;

    this.user$.subscribe((user) => {
      console.log('Bootm menu', user);
    });
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  onLogout() {
    this.auth.logout();
  }
}
