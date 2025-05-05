import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  showOtp = false;
  mobileNumber = '';
  otp1 = '';
  otp2 = '';
  otp3 = '';
  otp4 = '';

  onSubmit() {
    // Ideally send OTP to the user here via backend
    this.showOtp = true;
  }

  verifyOtp() {
    const otp = this.otp1 + this.otp2 + this.otp3 + this.otp4;
    console.log('Entered OTP:', otp);

    // Add verification logic here
  }
}
