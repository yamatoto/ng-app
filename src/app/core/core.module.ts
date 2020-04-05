import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';
import { AuthEffects } from './store/effects/auth.effects';
import { authFeatureKey, authReducer } from './store/reducers/auth.reducer';

@NgModule({
  imports: [
    EffectsModule.forFeature([AuthEffects]),
    RouterModule,
    SharedModule,
    StoreModule.forFeature(authFeatureKey, authReducer)
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
