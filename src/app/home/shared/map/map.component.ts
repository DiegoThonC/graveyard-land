import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map, Marker, Popup } from 'mapbox-gl';
import { MapService } from 'src/app/services/map.service';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  @ViewChild('map') divMap!: ElementRef;
  zoomLevel: number = 10;

  constructor(private placesService: PlacesService,
              private mapService: MapService) { }

  ngAfterViewInit(): void {    
    if (!this.placesService.useLocation) throw Error('No available map.');

    const map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: this.placesService.useLocation,
      zoom: this.zoomLevel
    });

    const popup = new Popup().setHTML(
      `
        <span class="d-flex mt-2" style="color: #252A2E; font-weight: 600">
          Your Location
        </span>
      `
    );
    const marker = new Marker({ color: 'red' })
      .setLngLat( this.placesService.useLocation )
      .setPopup( popup )
      .addTo( map );

    this.mapService.setMap(map);
    this.mapService.createMarkersFromDB();
  }
}
