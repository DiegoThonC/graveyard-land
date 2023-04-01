import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BurialSpotsComponent } from './dashboard/pages/burial-spots/burial-spots.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BackyardCardComponent } from './shared/backyard-card/backyard-card.component';
import { searchBarComponent } from './shared/search-bar/search-bar.component';
import { MapComponent } from './shared/map/map.component';
import { InfoCardComponent } from './shared/info-card/info-card.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { EmptyDataComponent } from './shared/empty-data/empty-data.component';
import { ButtonStartOverComponent } from './shared/button-start-over/button-start-over.component';
import { BookingFormComponent } from './dashboard/pages/booking-form/booking-form.component';
import { ContactInfoComponent } from './shared/contact-info/contact-info.component';
import { BookingInfoComponent } from './shared/booking-info/booking-info.component';
import { ArrowBackComponent } from './shared/arrow-back/arrow-back.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BurialSpotsComponent,
    NavbarComponent,
    BackyardCardComponent,
    searchBarComponent,
    MapComponent,
    InfoCardComponent,
    LoadingComponent,
    EmptyDataComponent,
    ButtonStartOverComponent,
    BookingFormComponent,
    ContactInfoComponent,
    BookingInfoComponent,
    ArrowBackComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomedModule { }
