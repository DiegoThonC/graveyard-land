import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  email: string = '';

  constructor(private auth: AuthService) { }

  forgotPassword() {
    if (this.email) {
      this.auth.forgotPassword(this.email);
      this.email = '';
      return;
    }
    alert('you must fill the email field');
  }
}
