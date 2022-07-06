import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private auth: AuthService) {}
  registerForm = this.fb.group({
    email: [''],
    password: [''],
  });
  ngOnInit(): void {
    this.registerForm.patchValue({
      email: '',
      password: '',
    });
  }
  login() {
    this.auth.loginUser(this.registerForm.value).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
