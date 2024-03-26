import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      preferredName: [''],
      pronouns: [''],
      emailAddress: ['', Validators.compose([Validators.required, Validators.email])],
      phoneNumber: ['', Validators.pattern('^[0-9]{10}$')],
      faxNumber: ['', Validators.pattern('^[0-9]{10}$')]
    });
  }

  submitForm()
}
