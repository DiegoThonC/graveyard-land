import { Component } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private placesService: PlacesService) { }

  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }
}
