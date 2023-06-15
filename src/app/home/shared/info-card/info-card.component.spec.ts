import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InfoCardComponent } from './info-card.component';
import { GravesService } from 'src/app/services/graves.service';
import { of } from 'rxjs';
import { Grave } from 'src/app/model/Grave.model';
import { PlacesService } from 'src/app/services/places.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

describe('InfoCardComponent', () => {
  let component: InfoCardComponent;
  let fixture: ComponentFixture<InfoCardComponent>;
  let gravesService: GravesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoCardComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebase)
      ],
      providers: [
        GravesService,
        PlacesService,
        AngularFirestore
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCardComponent);
    component = fixture.componentInstance;
    gravesService = TestBed.inject(GravesService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve grave information', () => {
    const mockGrave: Grave = {
      id: '1', 
      image: ['image1.jpg'],
      description: '',
      price: 0,
      long: 0,
      lat: 0,
      city: '',
      measure: undefined
    };
    spyOn(gravesService, 'getInfoGrave').and.returnValue(of(mockGrave));
    component.getInfoGrave();
    expect(component.grave).toEqual(mockGrave);
  });

  it('should swap the image', () => {
    const mockImage = { href: 'newimage.jpg' };
    component.img = { src: '' };
    component.swap(mockImage);
    expect(component.img.src).toEqual(mockImage.href);
  });
});
