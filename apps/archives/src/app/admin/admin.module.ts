import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderModule } from '@archives/layout/header';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminRoutingModule, HeaderModule],
})
export class AdminModule {}
