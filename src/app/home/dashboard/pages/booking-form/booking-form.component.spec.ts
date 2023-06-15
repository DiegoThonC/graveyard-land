import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrowBackComponent } from 'src/app/home/shared/arrow-back/arrow-back.component';
import { BookingFormComponent } from './booking-form.component';
import { BookingInfoComponent } from 'src/app/home/shared/booking-info/booking-info.component';
import { ContactInfoComponent } from 'src/app/home/shared/contact-info/contact-info.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('BookingFormComponent', () => {
  let component: BookingFormComponent;
  let fixture: ComponentFixture<BookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        BookingFormComponent, 
        ArrowBackComponent, 
        BookingInfoComponent, 
        ContactInfoComponent 
      ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
