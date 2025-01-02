import { Injectable } from '@angular/core';
import { Teacher } from '../models/Teacher';

@Injectable({
  providedIn: 'root',
})
export class TeacherServiceService {
  static count: number = 0;
  TeacherServiceService: any;
  teachers:Teacher[]=[
    
  ];
 
  update_teacher: Teacher;

  //constructor() { }

  get() {
    return this.teachers;
  }

  Add(teacher: Teacher) {
    this.teachers.push(teacher);
  }

  update(teacher:Teacher) {
    this.TeacherServiceService.update_teacher = this.teachers.find(
      (t: Teacher) => t.ID == teacher.ID
    );
    this.update_teacher = teacher;
  }

  Delete(teacher:Teacher) {
    let toDelete = this.teachers.findIndex(
      (t: Teacher) => t.ID == teacher.ID
    );
    this.teachers.slice(toDelete,1);
  }
}
