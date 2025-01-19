import { Component } from '@angular/core';
import { EnterSiteService } from '../Services/enter web site/enter-site.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {


  constructor(private enterSite:EnterSiteService){};
  
  LogOut(){
    this.enterSite.logOut();
  }
}
