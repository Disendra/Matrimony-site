import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAccountRoutingModule } from './create-account-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { CreateAccountComponent } from './create-account.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    CreateAccountComponent,
  ],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    SharedModule,
    HeaderModule 
  ]
})
export class CreateAccountModule { }
