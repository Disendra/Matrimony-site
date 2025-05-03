import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  step = 1;

  formData: any = {
    // Step 1 & 2 fields
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileFor: '',
    gender: '',
    dob: '',
    landlineNumber: '',
    mobileNumber2: '',
    maritalStatus: '',
    religion: '',
    caste: '',
  
    // Step 3 new fields
    height: '',
    weight: '',
    bodyType: '',
    complexion: '',
    gothram: '',
    sign: '',
    star: '',
    smoking: '',
    drinking: '',
    diet: ''
  };
  

  nextStep() {
    debugger;
    if (this.step <= 3) {
      this.step++;
    }
  }
  

  onSubmit() {
    if (this.step === 2) {
      console.log('Form submitted:', this.formData);
      // Proceed with saving data
    }
  }
}
