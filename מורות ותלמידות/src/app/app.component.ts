import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import{TeachrFormComponent}from './teachr-form/teachr-form.component'
import { EditTeacherComponent } from "./edit-teacher/edit-teacher.component";
import { IkonComponent } from "./ikon/ikon.component";
// import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { APIComponent } from './api/api.component';
import { HttpClientModule } from '@angular/common/http';
import { EnterSiteService } from './Services/enter web site/enter-site.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    // StudentListComponent, 
    // TeachrFormComponent, 
    // EditTeacherComponent, 
    // IkonComponent,
    RouterLink, 
    RouterLinkActive,
    MatTabsModule,
    APIComponent,
    HttpClientModule],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {
 
  constructor(public enterSite:EnterSiteService){};
}

