import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
import { User } from 'src/app/model/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth,
              private router: Router,
              public afs: Firestore) { }

  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password)
      .then( res => {
        if (res.user?.emailVerified) {
          this.setUserData(res.user);
          this.router.navigate(['./dashboard']);
          return;
        }
        this.router.navigate(['auth/verify-email']);
      }, err => {
        alert('error' + err.message);
        this.router.navigate(['auth/login']);
      })
  }

  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then( res => {
        alert('registro completo');
        this.router.navigate(['auth/login']);
        this.sendEmailForVerification(res.user);
      }, err => {
        alert('error' + err.message);
      })
  }

  logout() {
    this.fireAuth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['auth/login']);
    }, err => {
      alert('error' + err.message);
    })
  }

  signInWithGoogle() {
    this.fireAuth.signInWithPopup( new GoogleAuthProvider)
      .then( res => {
        this.setUserData(res.user);
        this.router.navigate(['dashboard']);
        localStorage.setItem('token', JSON.stringify(res.user?.uid));
      }, err => {
        alert('error' + err.message);
      })
  }

  forgotPassword(email: string) {
    this.fireAuth.sendPasswordResetEmail(email)
      .then( () => {
        this.router.navigate(['auth/verify-email']);
      }, err => {
        alert('error' + err.message);
      })
  }

  sendEmailForVerification(user: any) {
    user.sendEmailVerification().then( (res: any) => {
      this.router.navigate(['auth/verify-email']);
    }, (err: any) => {
      alert('error' + err.message);
    })
  }
  
  setUserData(user: any) {
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    localStorage.setItem('user', JSON.stringify(userData));    
  }
}
