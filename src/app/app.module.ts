import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { metaReducers, reducers } from '@core/store/reducers';
import { AuthModule } from '@features/logins/auth.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from '@shared/shared.module';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}),
    HttpClientModule,
    NgbModule,
    SharedModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true
      }
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal
    })
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
