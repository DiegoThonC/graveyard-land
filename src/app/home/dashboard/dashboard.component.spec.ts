import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { PlacesService } from 'src/app/services/places.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoadingComponent } from '../shared/loading/loading.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent, LoadingComponent, NavbarComponent],
      imports: [HttpClientTestingModule], // Importamos HttpClientTestingModule
      providers: [PlacesService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
