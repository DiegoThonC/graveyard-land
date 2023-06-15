import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GravesService } from 'src/app/services/graves.service';
import { MapService } from 'src/app/services/map.service';
import { PlacesService } from 'src/app/services/places.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/services/auth.service';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let authService: AuthService;
  let placesService: PlacesService;
  let mapService: MapService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
      ],
      providers: [
        PlacesService, 
        MapService, 
        GravesService, 
        AngularFirestore
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    placesService = TestBed.inject(PlacesService);
    mapService = TestBed.inject(MapService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call logout method on LogOut()', () => {
    spyOn(authService, 'logout');
    component.LogOut();
    expect(authService.logout).toHaveBeenCalled();
  });

  it('should set country and call flyTo method on changeLocationSearch()', () => {
    const country = 'USA';
    const coords: [number, number] = [10, 20];
    spyOn(mapService, 'flyTo');
    component.changeLocationSearch(country, coords);
    expect(placesService.country).toBe(country);
    expect(mapService.flyTo).toHaveBeenCalledWith(coords);
  });
});
