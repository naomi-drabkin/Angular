import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UsersLoginService } from '../UserLogin/users-login.service';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
 

   current:User 

   constructor(private userService:UsersLoginService,private activateRouter:ActivatedRoute){}

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe((params)=>{

      const id = params.get('id');
      if(id){
        let ID = +id;
        this.userService.getUserById(ID);
      }
    })
  }


}
