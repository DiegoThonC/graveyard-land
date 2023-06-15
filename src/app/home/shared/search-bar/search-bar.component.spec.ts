import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { searchBarComponent } from './search-bar.component';
import { PlacesService } from 'src/app/services/places.service';
import { MapService } from 'src/app/services/map.service';
import { Feature } from 'src/app/model/Places.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GravesService } from 'src/app/services/graves.service';

describe('searchBarComponent', () => {
  let component: searchBarComponent;
  let fixture: ComponentFixture<searchBarComponent>;
  let placesService: PlacesService;
  let mapService: MapService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [searchBarComponent],
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(searchBarComponent);
    component = fixture.componentInstance;
    placesService = TestBed.inject(PlacesService);
    mapService = TestBed.inject(MapService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have isLoadingPlaces set correctly', () => {
    placesService.isLoadingPlaces = true;
    expect(component.isLoadingPlaces).toBe(true);
  });

  it('should have places set correctly', () => {
    const examplePlaces: Feature[] = [
        { id: '1', type: '', place_name: 'Place 1', center: [0, 0] },
        { id: '1', type: '', place_name: 'Place 2', center: [1, 1] },
        { id: '1', type: '', place_name: 'Place 3', center: [2, 2] }
    ];
    placesService.places = examplePlaces;
    expect(component.places).toEqual(examplePlaces);
  });

  it('should call searchPlaces method on search', fakeAsync(() => {
    spyOn(placesService, 'searchPlaces');
    component.search('term');
    tick(350);
    expect(placesService.searchPlaces).toHaveBeenCalledWith('term');
  }));

  it('should call flyTo method on flyTo', () => {
    spyOn(mapService, 'flyTo');
    spyOn(placesService, 'RemovePlaces');
    const examplePlace: Feature = { id: '1', type: '', place_name: 'Place 1', center: [0, 0] };
    component.flyTo(examplePlace);
    expect(mapService.flyTo).toHaveBeenCalledWith([0, 0]);
    expect(component.selectedPlace).toBe('Place 1');
    expect(placesService.RemovePlaces).toHaveBeenCalled();
  });
});
