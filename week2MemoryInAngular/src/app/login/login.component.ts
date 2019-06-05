import { Component, OnInit} from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule, FormBuilder, Validators, FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserI } from '../jwt/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    name: [null,Validators.compose([Validators.required, Validators.minLength(5)])],
    password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    })
  }

  onSubmit(userData) {
    const u:UserI = {
      name: userData.name,
      password: userData.password,
    }
    this.authService.login(u).subscribe(res => {
      this.router.navigateByUrl('/auth');
    });
  }
}
