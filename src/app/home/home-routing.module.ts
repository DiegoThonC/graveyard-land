import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurialSpotsComponent } from './dashboard/pages/burial-spots/burial-spots.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingFormComponent } from './dashboard/pages/booking-form/booking-form.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, ...canActivate( () => { return redirectUnauthorizedTo(['/auth/login']); }),
    children: [
      {
        path: 'search-spots',
        component: BurialSpotsComponent
      },
      {
        path: 'booking-form',
        component: BookingFormComponent
      },
      {
        path: '**',
        redirectTo: 'search-spots'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
