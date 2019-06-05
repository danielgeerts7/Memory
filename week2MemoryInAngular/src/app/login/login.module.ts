import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
   ],

    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule

    ],
    providers: [
      AuthService
    ]
       })
    export class LoginModule { }
