import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import{TeachrFormComponent}from './teachr-form/teachr-form.component'
import { EditTeacherComponent } from "./edit-teacher/edit-teacher.component";
import { IkonComponent } from "./ikon/ikon.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentListComponent, TeachrFormComponent, EditTeacherComponent, IkonComponent],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app!!!';
  whattime(){
  let now=new Date();
  if(now.getHours()<6&&now.getHours()>21){
   return "good night";
  }
  else if(now.getHours()<12){return "good morning"}
  else {return "good afternoon"}
  }
}

