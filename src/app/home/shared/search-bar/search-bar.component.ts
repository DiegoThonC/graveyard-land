import { Component } from '@angular/core';
import { Feature } from 'src/app/model/Places.model';
import { MapService } from 'src/app/services/map.service';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class searchBarComponent {
  lnglat!: number[][];
  selectedPlace: string = '';

  constructor(private placeService: PlacesService,
              private mapService: MapService) { }

  get isLoadingPlaces(): boolean {
    return this.placeService.isLoadingPlaces;
  }

  get places(): Feature[] {
    return this.placeService.places;
  }

  search(term: string = '') {
    setTimeout(() => {
      const searchTerm = term.toLowerCase();
      this.placeService.searchPlaces(searchTerm);      
    }, 350);
  }

  flyTo( place: Feature ) {
    const [lng, lat] = place.center!;
    this.mapService.flyTo([lng, lat]);

    this.selectedPlace = place.place_name;
    this.placeService.RemovePlaces();
  }

}
