import { Injectable } from '@angular/core';
import { LngLatLike, Map, Marker } from 'mapbox-gl';
import { Feature } from '../model/Places.model';
import { GravesService } from './graves.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map;
  marker: Marker[] = [];

  constructor(private graveService: GravesService) { }

  get isMapReady() {
    return !!this.map;
  }

  setMap(map: Map) {
    this.map = map;
  }

  flyTo(coords: LngLatLike) {
    if (!this.isMapReady) throw Error('mapa no esta inicializado');

    this.map?.flyTo({
      zoom: 14,
      center: coords
    })
  }

  createMarkersFromDB() {
    if (!this.isMapReady) throw Error('mapa no esta inicializado');
    
    this.graveService.getGraves().subscribe(resp => {
      resp.forEach( (coords: any) => {
        const {long, lat} = coords.payload.doc.data();
        new Marker().setLngLat([long, lat]).addTo(this.map!);
      });
    });
  }
}
