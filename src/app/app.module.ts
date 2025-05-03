import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HeaderModule } from "./components/header/header.module";
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
