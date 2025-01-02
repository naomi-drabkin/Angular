import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import{TeachrFormComponent}from './teachr-form/teachr-form.component'
import { EditTeacherComponent } from "./edit-teacher/edit-teacher.component";
import { IkonComponent } from "./ikon/ikon.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    StudentListComponent, 
    TeachrFormComponent, 
    EditTeacherComponent, 
    IkonComponent,
    RouterLink, 
    RouterLinkActive],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {
 
}

