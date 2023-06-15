import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { AuthService } from '../../services/auth.service';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authServiceSpy: AuthService;

  beforeEach(async () => {
    // Crea un objeto espía para AuthService
    const spy = jasmine.createSpyObj('AuthService', ['register']);

    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers: [{ provide: AuthService, useValue: spy }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    authServiceSpy = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call authService.register with correct email and password on register', () => {
    component.email = 'test@example.com';
    component.password = 'password123';
    component.register();
    expect(authServiceSpy.register).toHaveBeenCalledWith('test@example.com', 'password123');
  });

  it('should display an alert when email or password is empty on register', () => {
    spyOn(window, 'alert');
    component.email = '';
    component.password = '';
    component.register();
    expect(window.alert).toHaveBeenCalledWith('You must fill all fields');
    expect(authServiceSpy.register).not.toHaveBeenCalled();
  });
});
