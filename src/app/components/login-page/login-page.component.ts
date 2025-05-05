import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { login } from '../../constants/api';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  errorMessage = '';
  loginData = {
    mobileNumber: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  onLogin() {
    this.http.post(login, this.loginData).subscribe({
      next: (res: any) => {
        console.log(res)
        localStorage.setItem('token', res.token);
        localStorage.setItem('mobileNumber', this.loginData.mobileNumber)
        localStorage.setItem('userId', res.userId)
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        this.errorMessage = 'Invalid mobile number or password';
      }
    });
  }
}
