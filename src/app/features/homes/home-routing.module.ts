import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRouterComponent } from './home.router.component';
import { ContactInfoComponent } from './pages/contact-info/contact-info.component';

const routes: Routes = [
  {
    path: '',
    component: HomeRouterComponent,
    children: [
      {
        path: '',
        component: ContactInfoComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
