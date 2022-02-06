import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomMenuComponent } from '../bottom-menu/bottom-menu.component';
import { AuthFacade } from '@archives/auth';

@Component({
  selector: 'arc-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  user$ = this.authFacade.getUser();

  constructor(
    private bottomSheet: MatBottomSheet,
    private authFacade: AuthFacade
  ) {}

  onMenuClick() {
    this.bottomSheet.open(BottomMenuComponent, { data: { user$: this.user$ } });
  }
}
