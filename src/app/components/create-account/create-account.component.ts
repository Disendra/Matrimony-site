import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { saveProfile } from '../../constants/api';
import { NgForm } from '@angular/forms';
declare var bootstrap: any;
import { bodyTypeOptions, casteOptions, complexionOptions, educationOptions, heightOptions, locationOptions, professionOptions, religionOptions, starOptions, weightOptions, zodiacSignOptions } from './dropdown';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent implements OnInit {
  @ViewChild('signupForm') signupForm!: NgForm;
  passwordMismatch: boolean = false;

  heightOptions = heightOptions;
  weightOptions = weightOptions;
  bodyTypeOptions = bodyTypeOptions;
  complexionOptions = complexionOptions;
  casteOptions = casteOptions;
  zodiacSignOptions = zodiacSignOptions;
  starOptions = starOptions;
  educationOptions = educationOptions;
  professionOptions = professionOptions;
  locationOptions = locationOptions;
  religionOptions = religionOptions;

  step = 1;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  formData: any = {
    // Step 1
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileFor: '',

    // Step 2
    gender: '',
    dob: '',
    landlineNumber: '',
    mobileNumber2: '',
    maritalStatus: '',
    religion: '',
    caste: '',

    // Step 3
    height: '',
    weight: '',
    bodyType: '',
    complexion: '',
    gothram: '',
    sign: '',
    star: '',
    smoking: '',
    drinking: '',
    diet: '',
    education: '',
    profession: '',
    location: '',
    haveChildren: '',
    aboutMe: '',
    profileImageUrl: ''
  };



  nextStep(form: NgForm) {
    this.passwordMismatch = false;

    if (this.formData.password !== this.formData.confirmPassword) {
      this.passwordMismatch = true;
      return;
    }

    if (!form.valid) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      return;
    }
    this.step++;
  }


  onSubmit() {
    if (!this.signupForm.valid) return;
    this.http.post(saveProfile, this.formData)
      .subscribe({
        next: (res) => {
          this.openSuccessModal();
        },
        error: (err) => {
          console.error('Error:', err);
          this.openFailedModal();
        }
      });
  }


  openSuccessModal() {
    const modalElement = document.getElementById('successModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement, {
        backdrop: 'static',
        keyboard: false
      });
      modal.show();
    }
  }

  openFailedModal() {
    const modalElement = document.getElementById('errorModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement, {
        backdrop: 'static',
        keyboard: false
      });
      modal.show();
    }
  }
}
