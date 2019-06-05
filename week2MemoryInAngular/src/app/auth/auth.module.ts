import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http';
import { AuthService } from './auth.service';
import { LoginModule } from '../login/login.module';
import { MemoryModule } from '../memory/memory.module';
import { Interceptor } from './Interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
    MemoryModule,
  ],
  providers: [ AuthService,

    {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true,
  }]
})
export class AuthModule { }
