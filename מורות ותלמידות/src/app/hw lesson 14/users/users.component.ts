import { Component, OnInit } from '@angular/core';
import { UsersLoginService } from '../UserLogin/users-login.service';
import { User } from '../../models/User';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  users:User[]
  constructor(private useService:UsersLoginService){}
  ngOnInit(): void {
    this.users = this.useService.getUsers();
  }
  LogOut(){
    this.useService.SignOut();
  }
}
