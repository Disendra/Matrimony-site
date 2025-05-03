import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    CommonModule,
    SharedModule,
    HeaderModule
  ]
})
export class ForgotPasswordModule { }
