import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileIntrestsRoutingModule } from './profile-intrests-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { ProfileIntrestsComponent } from './profile-intrests.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    ProfileIntrestsComponent
  ],
  imports: [
    CommonModule,
    ProfileIntrestsRoutingModule,
    SharedModule,
    HeaderModule
  ]
})
export class ProfileIntrestsModule { }
