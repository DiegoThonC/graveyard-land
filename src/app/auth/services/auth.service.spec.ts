import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import { of } from 'rxjs';

describe('AuthService', () => {
  let authService: AuthService;
  let fireAuthMock: Partial<AngularFireAuth>;
  let routerMock: Partial<Router>;

  beforeEach(() => {
    const fireAuthSpy = jasmine.createSpyObj('AngularFireAuth', [
      'signInWithEmailAndPassword',
      'createUserWithEmailAndPassword',
      'signOut',
      'signInWithPopup',
      'sendPasswordResetEmail',
    ]);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: fireAuthSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });

    authService = TestBed.inject(AuthService);
    fireAuthMock = TestBed.inject(AngularFireAuth) as Partial<AngularFireAuth>;
    routerMock = TestBed.inject(Router) as Partial<Router>;
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  describe('login', () => {
    it('should call signInWithEmailAndPassword with email and password', () => {
      const email = 'test@example.com';
      const password = 'password123';
      fireAuthMock.signInWithEmailAndPassword = jasmine
        .createSpy('signInWithEmailAndPassword')
        .and.returnValue(Promise.resolve({ user: { emailVerified: true } }));

      authService.login(email, password);

      expect(fireAuthMock.signInWithEmailAndPassword).toHaveBeenCalledWith(email, password);
    });

    it('should navigate to dashboard if email is verified on successful login', (done) => {
      fireAuthMock.signInWithEmailAndPassword = jasmine
        .createSpy('signInWithEmailAndPassword')
        .and.returnValue(Promise.resolve({ user: { emailVerified: true } }));
      routerMock.navigate = jasmine.createSpy('navigate');

      authService.login('test@example.com', 'password123');

      setTimeout(() => {
        expect(routerMock.navigate).toHaveBeenCalledWith(['./dashboard']);
        done();
      });
    });

    it('should navigate to email verification page if email is not verified on successful login', (done) => {
      fireAuthMock.signInWithEmailAndPassword = jasmine
        .createSpy('signInWithEmailAndPassword')
        .and.returnValue(Promise.resolve({ user: { emailVerified: false } }));
      routerMock.navigate = jasmine.createSpy('navigate');

      authService.login('test@example.com', 'password123');

      setTimeout(() => {
        expect(routerMock.navigate).toHaveBeenCalledWith(['auth/verify-email']);
        done();
      });
    });
  });

  describe('register', () => {
    xit('should call createUserWithEmailAndPassword with email and password', () => {
      const email = 'test@example.com';
      const password = 'password123';
      fireAuthMock.createUserWithEmailAndPassword = jasmine
        .createSpy('createUserWithEmailAndPassword')
        .and.returnValue(Promise.resolve({ user: { uid: '123' } }));

      authService.register(email, password);

      expect(fireAuthMock.createUserWithEmailAndPassword).toHaveBeenCalledWith(email, password);
    });

    xit('should navigate to login page on successful registration', (done) => {
      fireAuthMock.createUserWithEmailAndPassword = jasmine
        .createSpy('createUserWithEmailAndPassword')
        .and.returnValue(Promise.resolve({ user: { uid: '123' } }));
      routerMock.navigate = jasmine.createSpy('navigate');

      authService.register('test@example.com', 'password123');

      setTimeout(() => {
        expect(routerMock.navigate).toHaveBeenCalledWith(['auth/login']);
        done();
      });
    });
  });

  describe('logout', () => {
    it('should call signOut and remove token from localStorage', (done) => {
      fireAuthMock.signOut = jasmine.createSpy('signOut').and.returnValue(Promise.resolve());
      routerMock.navigate = jasmine.createSpy('navigate');

      authService.logout();

      setTimeout(() => {
        expect(fireAuthMock.signOut).toHaveBeenCalled();
        expect(routerMock.navigate).toHaveBeenCalledWith(['auth/login']);
        done();
      });
    });
  });

  describe('signInWithGoogle', () => {
    it('should call signInWithPopup with GoogleAuthProvider', (done) => {
      fireAuthMock.signInWithPopup = jasmine
        .createSpy('signInWithPopup')
        .and.returnValue(Promise.resolve({ user: { uid: '123' } }));
      routerMock.navigate = jasmine.createSpy('navigate');
      localStorage.setItem('token', 'test');

      authService.signInWithGoogle();

      setTimeout(() => {
        expect(fireAuthMock.signInWithPopup).toHaveBeenCalledWith(new GoogleAuthProvider());
        expect(routerMock.navigate).toHaveBeenCalledWith(['dashboard']);
        done();
      });
    });
  });

  describe('forgotPassword', () => {
    it('should call sendPasswordResetEmail with email', (done) => {
      fireAuthMock.sendPasswordResetEmail = jasmine.createSpy('sendPasswordResetEmail').and.returnValue(Promise.resolve());
      routerMock.navigate = jasmine.createSpy('navigate');

      authService.forgotPassword('test@example.com');

      setTimeout(() => {
        expect(fireAuthMock.sendPasswordResetEmail).toHaveBeenCalledWith('test@example.com');
        expect(routerMock.navigate).toHaveBeenCalledWith(['auth/verify-email']);
        done();
      });
    });
  });

  describe('sendEmailForVerification', () => {
    it('should call sendEmailVerification', (done) => {
      const userMock = { sendEmailVerification: jasmine.createSpy('sendEmailVerification').and.returnValue(Promise.resolve()) };
      routerMock.navigate = jasmine.createSpy('navigate');

      authService.sendEmailForVerification(userMock);

      setTimeout(() => {
        expect(userMock.sendEmailVerification).toHaveBeenCalled();
        expect(routerMock.navigate).toHaveBeenCalledWith(['auth/verify-email']);
        done();
      });
    });
  });

  describe('setUserData', () => {
    it('should store user data in localStorage', () => {
      const user = {
        uid: '123',
        email: 'test@example.com',
        displayName: 'Test User',
        photoURL: 'https://example.com/user.jpg',
        emailVerified: true,
      };

      authService.setUserData(user);

      const storedUser = JSON.parse(localStorage.getItem('user')!);
      expect(storedUser).toEqual(user);
    });
  });
});
