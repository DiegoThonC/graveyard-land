import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    if (this.email === '' || this.password === '') {
      return alert('You must fill all fields');
    }
    this.authService.login(this.email, this.password);
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }
}
