import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurialSpotsComponent } from './burial-spots.component';
import { searchBarComponent } from 'src/app/home/shared/search-bar/search-bar.component';
import { MapComponent } from 'src/app/home/shared/map/map.component';
import { BackyardCardComponent } from 'src/app/home/shared/backyard-card/backyard-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GravesService } from 'src/app/services/graves.service';
import { MapService } from 'src/app/services/map.service';
import { PlacesService } from 'src/app/services/places.service';
import { environment } from 'src/environments/environment';
import { ButtonStartOverComponent } from 'src/app/home/shared/button-start-over/button-start-over.component';
import { EmptyDataComponent } from 'src/app/home/shared/empty-data/empty-data.component';

describe('BurialSpotsComponent', () => {
  let component: BurialSpotsComponent;
  let fixture: ComponentFixture<BurialSpotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        BurialSpotsComponent, 
        searchBarComponent, 
        MapComponent, 
        BackyardCardComponent,
        ButtonStartOverComponent,
        EmptyDataComponent
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
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurialSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
