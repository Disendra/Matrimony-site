import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPageRoutingModule } from './list-page-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { ListPageComponent } from './list-page.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    ListPageComponent
  ],
  imports: [
    CommonModule,
    ListPageRoutingModule,
    SharedModule,
    HeaderModule
  ]
})
export class ListPageModule { }
