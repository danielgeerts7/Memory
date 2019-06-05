import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'topfive',
  template: `
      <button class = "logout" (click)= logout()>Logout</button>
      <b>Top vijf</b>
      <ol id="topscores"></ol>
  `
})
export class TopfiveComponent {

  constructor(private authService: AuthService, private router: Router){

  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');

  }
}
