import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackyardCardComponent } from './backyard-card.component';
import { GravesService } from 'src/app/services/graves.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { InfoCardComponent } from '../info-card/info-card.component';
import { EmptyDataComponent } from '../empty-data/empty-data.component';

describe('BackyardCardComponent', () => {
  let component: BackyardCardComponent;
  let fixture: ComponentFixture<BackyardCardComponent>;
  let gravesService: Partial<GravesService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackyardCardComponent, InfoCardComponent, EmptyDataComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebase)
      ],
      providers: [
        GravesService,
        AngularFirestore,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackyardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
