import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Feature, Places } from '../model/Places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];
  public country!: string;

  public useLocation?: [number, number];

  get isUserLocationReady(): boolean {
    return !!this.useLocation;
  }

  constructor(private http: HttpClient) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number] | void> {
    return new Promise( (reject, resolve ) => {
      navigator.geolocation.getCurrentPosition(
        ({coords}) => { 
          this.useLocation = [coords.longitude, coords.latitude];
          resolve(this.useLocation);
        },
        (err) => {
          alert(err + 'It was not possible to get Geolocation');
          console.log(err + 'It was not possible to get Geolocation');
          reject();
        }
      );
    });
  }

  searchPlaces(term: string) {

    if (term.length === 0 ) {
      this.isLoadingPlaces = false;
      this.places = [];
      return;
    }

    if (!this.useLocation) throw Error('There is no user location active');

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return this.http.get<Places>(`
    ${url}${term}.json?country=${this.country}&proximity=${this.useLocation}&language=en&access_token=${environment.mapboxToken}
    `).subscribe( resp => {
        this.isLoadingPlaces = true;
        this.places = resp.features;
      })
  }

  RemovePlaces() {
    this.places = [];
  }
}
