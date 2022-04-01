import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignRoutingModule } from './sign-routing.module';
import { SignComponent } from './sign.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    SignComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    SignRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignModule { }
