import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private auth: AuthService, private route: Router) {}
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
      next: (result:any) => {
        console.log(result);
        localStorage.setItem('userId', result.loggedUserId)
        localStorage.setItem('access_token', result.token)
        this.route.navigateByUrl('/home')
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
