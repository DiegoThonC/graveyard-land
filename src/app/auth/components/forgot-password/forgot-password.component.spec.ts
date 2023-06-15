import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotPasswordComponent } from './forgot-password.component';
import { AuthService } from '../../services/auth.service';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let authServiceSpy: AuthService;

  beforeEach(async () => {
    // Crea un objeto espía para AuthService
    const spy = jasmine.createSpyObj('AuthService', ['forgotPassword']);

    await TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent],
      providers: [{ provide: AuthService, useValue: spy }]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    authServiceSpy = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call forgotPassword method on AuthService when email is provided', () => {
    const email = 'test@example.com';
    component.email = email;

    component.forgotPassword();

    expect(authServiceSpy.forgotPassword).toHaveBeenCalledWith(email);
    expect(component.email).toEqual('');
  });

  it('should display an alert when email is not provided', () => {
    spyOn(window, 'alert');
    component.email = '';

    component.forgotPassword();

    expect(window.alert).toHaveBeenCalledWith('you must fill the email field');
    expect(authServiceSpy.forgotPassword).not.toHaveBeenCalled();
  });
});
