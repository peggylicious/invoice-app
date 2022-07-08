import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private auth: AuthService, private route: Router) { }
  registerForm = this.fb.group({
    email: [""],
    password: [""]
  });
  ngOnInit(): void {
    this.registerForm.patchValue({
      email: "",
      password: ""
    })
  }
  register(){
    this.auth.registerUser(this.registerForm.value).subscribe({
      next: (result) => {
        this.route.navigateByUrl('/login')
        console.log(result)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
