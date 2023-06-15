import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { BookingInfoComponent } from './booking-info.component';

describe('BookingInfoComponent', () => {
  let component: BookingInfoComponent;
  let fixture: ComponentFixture<BookingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingInfoComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ graveInfo: { /* mock grave info */ } })),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the grave info', () => {
    expect(component.graveInfo).toBeDefined();
  });
});

