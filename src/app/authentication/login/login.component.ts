import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isSubmitted = false;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder,
    private router: Router) { }

  get fControl() { return this.loginForm.controls }

  login() {
    this.isSubmitted = true;
    console.log(this.loginForm.value)
    this.router.navigate(['/dashboard'])
  }


}
