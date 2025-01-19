import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EnterSiteService {

  public IsPossible:boolean = false;
  constructor(private r:Router) { }

  logIn(email:string){
    this.IsPossible = true;
    this.r.navigate(['/logout'])
  }

  logOut(){
    this.IsPossible = false;
    this.r.navigate(['/login'])
  }
}
