import { Component } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MapService } from 'src/app/services/map.service';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user!: User;

  constructor(private auth: AuthService,
              private placesService: PlacesService,
              private mapService: MapService) {
    this.getInfoUser();
  }

  LogOut() {
    this.auth.logout();
  }

  changeLocationSearch(value: string, coords: [number, number]) {
    this.placesService.country = value;
    this.mapService.flyTo(coords);
  }

  getInfoUser() {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }
}
