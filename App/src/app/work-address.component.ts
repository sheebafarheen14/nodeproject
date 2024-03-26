import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-work-address',
  templateUrl: './work-address.component.html',
  styleUrls: ['./work-address.component.css']
})
export class WorkAddressComponent {
  workAddressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.workAddressForm = this.fb.group({
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      province: ['', Validators.required],
      country: ['Canada', Validators.required],
      postalCode: ['', Validators.pattern('^[A-Za-z]\d[A-Za-z] *[A-Za-z][A-Za-z]\d[A-Za-z]$')],
    });
  }

  submitWorkAddressForm() {
    // Handle form submission
  }
}
