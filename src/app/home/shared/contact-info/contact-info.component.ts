import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User.model';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  infoUser!: User;
  formG: FormGroup = this.fb.group({
    'name': [ '', [Validators.required, Validators.pattern(/^[^ ].+[^ ]$/)] ],
    'rut': [ '', [Validators.required, Validators.pattern(/^[^ ].+[^ ]$/)] ],
    'status': [ '', [Validators.required] ],
    'birthdate': [ '', [Validators.required, Validators.pattern(/^[^ ].+[^ ]$/)] ],
    'relationWith': [ '', [Validators.required] ],
    'email': [ '', [Validators.required, Validators.pattern(/^[^ ].+[^ ]$/)] ],
    'city': [ '', [Validators.required, Validators.pattern(/^[^ ].+[^ ]$/)] ],
    'phone': [ '', [Validators.required, Validators.pattern(/^[^ ].+[^ ]$/)] ],
    'deceasedName': [ '', [Validators.required, Validators.pattern(/^[^ ].+[^ ]$/)] ],
    'deceasedBirthdate': [ '', [Validators.required, Validators.pattern(/^[^ ].+[^ ]$/)] ],
    'deceasedRut': [ '', [Validators.required, Validators.pattern(/^[^ ].+[^ ]$/)] ],
    'deceasedCity': [ '', [Validators.required, Validators.pattern(/^[^ ].+[^ ]$/)] ]
  });

  constructor(private fb: FormBuilder) { 
    this.infoUser = JSON.parse(localStorage.getItem('user')!)
  }

  ngOnInit(): void {
    this.formG.reset({
      'name': this.infoUser.displayName,
      'email': this.infoUser.email
    });
  }

  validField(field: string) {
    return this.formG.controls[field].touched && 
            this.formG.controls[field].errors ? 'invalid' : 'valid';
  }

  sendData() {
    if (this.formG.invalid) {
      this.formG.markAllAsTouched();
      return; 
    }
    alert('Information sent, you will be contacted.');
    this.formG.reset({
      'name': this.infoUser.displayName,
      'email': this.infoUser.email
    });
  }
}
