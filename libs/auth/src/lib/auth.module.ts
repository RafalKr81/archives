import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '@archives/shared/material';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [CommonModule, RouterModule, AuthRoutingModule, MaterialModule],
  declarations: [LoginComponent, LogoutComponent],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [AuthGuard],
    };
  }
}
