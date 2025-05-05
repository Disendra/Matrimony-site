import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileIntrestsComponent } from './profile-intrests.component';

const routes: Routes = [
  { path : '', component : ProfileIntrestsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileIntrestsRoutingModule { }
