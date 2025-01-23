import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersLoginService {
  private Users = [
    new User(1, 'Chana', 'c0523@gmail.com'),
    new User(2, 'Sara', 's0583@gmail.com'),
    new User(3, 'Naama', 'n0543@gmail.com'),
    new User(4, 'Chaia', 'c02563@gmail.com'),
  ];

  constructor(private router: Router) {
  }

  getUserById(id:number){
    return this.Users.find(u => u.ID == id);
  }

  getUsers(){
    return this.Users;
  }

  SignIn(id: number) {
    id=Number(id);
    if (this.getUserById(id)) {      
      this.router.navigate(['/UsersComponent']);
    }
  }
  SignOut(){
    this.router.navigate(['/UserLogInComponent']);
  }

}
