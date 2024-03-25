import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  model = {
    name: '',
    email: ''
  };

  submitForm(value: any): void {
    // implement API call to save form data
  }
}