import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  register() {
    if (this.email === '' || this.password === '') {
      return alert('You must fill all fields');      
    }
    this.authService.register(this.email, this.password);
  }
}
