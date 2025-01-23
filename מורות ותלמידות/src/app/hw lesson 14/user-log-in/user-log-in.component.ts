import { Component, Inject } from '@angular/core';
import { UsersLoginService } from '../UserLogin/users-login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-user-log-in',
  standalone: true,
  imports: [],
  templateUrl: './user-log-in.component.html',
  styleUrl: './user-log-in.component.css',
})
export class UserLogInComponent {
  // router = Inject(Router);
  LogInForm = new FormGroup({
    id: new FormControl<number>(1,[Validators.required]),
  });

  constructor(private UserService: UsersLoginService) {}

  login() {
    // var Isexsist = this.UserService.getUserById(this.LogInForm.value.id as number);
    if(this.LogInForm.valid)
    {
      this.UserService.SignIn(this.LogInForm.value.id as number);
    }
  }
}
