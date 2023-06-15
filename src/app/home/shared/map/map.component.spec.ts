import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GravesService } from 'src/app/services/graves.service';
import { MapService } from 'src/app/services/map.service';
import { PlacesService } from 'src/app/services/places.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ButtonStartOverComponent } from '../button-start-over/button-start-over.component';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let placesService: PlacesService;
  let mapService: MapService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MapComponent,
        ButtonStartOverComponent
      ],
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

    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    placesService = TestBed.inject(PlacesService);
    mapService = TestBed.inject(MapService);
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
