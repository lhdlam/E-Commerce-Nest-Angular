import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ProductModule } from '../product/product.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ProductModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
