import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  mobileNumber: string = '';

  onSubmit() {
    if (this.mobileNumber) {
      console.log('Reset password for mobile number:', this.mobileNumber);
      // Add your reset password logic here (e.g., API call)
    } else {
      console.log('Please enter a mobile number');
    }
  }
}
