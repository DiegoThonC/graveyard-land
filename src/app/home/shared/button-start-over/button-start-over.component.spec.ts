import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonStartOverComponent } from './button-start-over.component';
import { MapService } from 'src/app/services/map.service';
import { PlacesService } from 'src/app/services/places.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { GravesService } from 'src/app/services/graves.service';

describe('ButtonStartOverComponent', () => {
  let component: ButtonStartOverComponent;
  let fixture: ComponentFixture<ButtonStartOverComponent>;
  let placesService: PlacesService;
  let mapService: MapService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonStartOverComponent],
      imports: [
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
      ],
      providers: [
        PlacesService,
        MapService,
        GravesService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonStartOverComponent);
    component = fixture.componentInstance;
    placesService = TestBed.inject(PlacesService);
    mapService = TestBed.inject(MapService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should throw an error if useLocation is not available', () => {
    placesService.useLocation = null!;
    expect(() => component.flyTo()).toThrowError('No available location.');
  });

  it('should throw an error if map is not ready', () => {
    !mapService.isMapReady;
    placesService.useLocation = [10, 20];
    expect(() => component.flyTo()).toThrowError('No available map.');
  });
});
