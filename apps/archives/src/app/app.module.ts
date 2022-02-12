import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@archives/shared/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { AuthModule as ArcAuthModule } from '@archives/auth';
import { environment as env } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { InitAppService } from './init-app.service';
import { DashboardComponent } from './dashboard/dashboard.component';

export const initAppServiceFactory =
  (initAppService: InitAppService) => (): void =>
    initAppService.init();

// todo: add server origin from configuration file
@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: [{ uri: `${env.backendApi}/*` }],
      },
    }),
    ArcAuthModule.forRoot(),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !env.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
          strictActionSerializability: true,
          strictStateSerializability: true,
          strictActionTypeUniqueness: true,
        },
      }
    ),
    !env.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
  ],
  providers: [
    InitAppService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initAppServiceFactory,
      deps: [InitAppService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
