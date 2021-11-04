import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@archives/shared/material';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [HeaderComponent, LogoComponent, BottomMenuComponent, HeaderMenuComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
