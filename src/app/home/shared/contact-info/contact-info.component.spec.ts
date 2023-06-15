import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactInfoComponent } from './contact-info.component';

describe('ContactInfoComponent', () => {
  let component: ContactInfoComponent;
  let fixture: ComponentFixture<ContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactInfoComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  xit('should initialize the form with user data', () => {
    const nameControl = component.formG.get('name');
    const emailControl = component.formG.get('email');

    expect(nameControl?.value).toBe(component.infoUser.displayName);
    expect(emailControl?.value).toBe(component.infoUser.email);
  });

  it('should reset the form and display success message on valid submission', () => {
    spyOn(window, 'alert');
    const nameControl = component.formG.get('name');
    const emailControl = component.formG.get('email');

    // Mock successful submission
    const resetSpy = jasmine.createSpy('reset');
    const formGroupMock = jasmine.createSpyObj('FormGroup', ['reset']);
    formGroupMock.reset.and.callFake(resetSpy);

    component.formG = formGroupMock;

    // Simulate valid form submission
    nameControl?.setValue('John Doe');
    emailControl?.setValue('john@example.com');
    component.sendData();

    expect(window.alert).toHaveBeenCalledWith('Information sent, you will be contacted.');
    expect(resetSpy).toHaveBeenCalled();
    expect(nameControl?.value).toBe('John Doe');
    expect(emailControl?.value).toBe('john@example.com');
  });
});
