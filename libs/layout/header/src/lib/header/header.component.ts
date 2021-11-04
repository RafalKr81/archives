import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomMenuComponent } from '../bottom-menu/bottom-menu.component';

@Component({
  selector: 'arc-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private bottomSheet: MatBottomSheet) {}

  onMenuClick() {
    this.bottomSheet.open(BottomMenuComponent);
  }
}
