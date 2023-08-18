import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm = this.formBuilder.group({
    username: [''],
    password: ['']
  })

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.signupUser(this.signupForm.value).subscribe(
      a => console.log('signup success', a)
    )
  }

}
