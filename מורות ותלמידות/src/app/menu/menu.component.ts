import { Component } from '@angular/core';
import { IkonComponent } from '../ikon/ikon.component';
import { StudentListComponent } from '../student-list/student-list.component';
import { ClassFormComponent } from "../class-form/class-form.component";
import { EditTeacherComponent } from '../edit-teacher/edit-teacher.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [IkonComponent, EditTeacherComponent, StudentListComponent, ClassFormComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  // title = 'my-first-app!!!';
  // whattime(){
  // let now=new Date();
  // if(now.getHours()<6&&now.getHours()>21){
  //  return "good night";
  // }
  // else if(now.getHours()<12){return "good morning"}
  // else {return "good afternoon"}
  // }
}
