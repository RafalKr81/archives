import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '@archives/shared/material';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthControllerService } from './services/auth-controller.service';
import { StoreModule } from '@ngrx/store';
import * as fromAuthReducer from './+states/auth.reducer';
import { AuthFacade } from './+states/auth.facade';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    MaterialModule,
    StoreModule.forFeature(
      fromAuthReducer.AUTH_STATE_NAME,
      fromAuthReducer.authReducer
    ),
  ],
  declarations: [LoginComponent, LogoutComponent],
  providers: [AuthFacade],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [AuthGuard, AuthControllerService],
    };
  }
}
