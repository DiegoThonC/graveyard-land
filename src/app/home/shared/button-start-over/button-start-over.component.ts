import { Component } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-button-start-over',
  templateUrl: './button-start-over.component.html',
  styleUrls: ['./button-start-over.component.scss']
})
export class ButtonStartOverComponent {

  constructor(private placesService: PlacesService,
              private mapService: MapService) { }

  flyTo() {

    if (!this.placesService.useLocation) throw Error('No available location.');
    if (!this.mapService.isMapReady) throw Error('No available map.');

    this.mapService.flyTo( this.placesService.useLocation );
  }
}
