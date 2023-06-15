import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    // Crea un objeto espía para AuthService
    const spy = jasmine.createSpyObj('AuthService', ['login', 'signInWithGoogle']);

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [{ provide: AuthService, useValue: spy }]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call authService.login with correct email and password on login', () => {
    const email = 'test@example.com';
    const password = 'password123';
    component.email = email;
    component.password = password;
    component.login();
    expect(authService.login).toHaveBeenCalledWith(email, password);
  });

  it('should display an alert when email or password is empty on login', () => {
    spyOn(window, 'alert');
    component.email = '';
    component.password = '';
    component.login();
    expect(window.alert).toHaveBeenCalledWith('You must fill all fields');
    expect(authService.login).not.toHaveBeenCalled();
  });

  it('should call authService.signInWithGoogle on signInWithGoogle', () => {
    component.signInWithGoogle();
    expect(authService.signInWithGoogle).toHaveBeenCalled();
  });
});
