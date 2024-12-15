import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Student } from '../models/Student';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { NgTemplateOutlet } from '@angular/common';
import { CourseStudentComponent } from '../course-student/course-student.component';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentDetailsComponent,NgTemplateOutlet,CourseStudentComponent ],
  templateUrl: './student-list.component.html',
  // styleUrl: './student-list.component.css',
})
export class StudentListComponent {

  students: Student[] = [
    new Student(1, 'yael', 'bloch', 'Lando', true, 100, new Date(),true),
    new Student(2, 'naomi', 'drabkin', 'perel', true, 99, new Date(),false),
    new Student(3, 'yafa', 'gh', 'Lando', false, 89, new Date(),true),
  ];

  selected: number = 0;
  show(id: number) {
    this.selected = id;
  }
  add() {
    this.selected = -1;
  }

  saveDetailesFather(s: Student) {
    console.log("PARENT");   
     this.students.push(s);
  }
  updateDetailesFather(s: Student) {
     if(this.students.findIndex(stud => stud.Id === s.Id)== -1){
      this.students.push(s);

    }
     else
      this.students = this.students.map(stud => stud.Id === s.Id? s : stud);
  }
 
}

