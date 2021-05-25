import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/core/interface/login.interface';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  login() {
    const payload: ILogin = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.loginService.login(payload).subscribe((resp: any) => {
      this.router.navigate(['/dashboard']);
      console.log(resp);
    });
  }
}
