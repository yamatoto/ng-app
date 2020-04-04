import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeRouterComponent } from './home.router.component';
import { ContactInfoComponent } from './pages/contact-info/contact-info.component';

const COMPONENTS = [
  HomeRouterComponent,
  ContactInfoComponent
];

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    TranslateModule.forChild({})
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class HomesModule { }
