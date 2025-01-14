import { Component, Input } from '@angular/core';
import { Teacher } from '../models/Teacher';
import { TeachrFormComponent } from '../teachr-form/teachr-form.component';
import { TeacherServiceService } from '../Services/TeacherServics/teacher-service.service';

@Component({
  selector: 'app-edit-teacher',
  standalone: true,
  imports: [TeachrFormComponent],
  templateUrl: './edit-teacher.component.html',
  styleUrl: './edit-teacher.component.css',
})
export class EditTeacherComponent {
  teachers: Teacher[];
  @Input() teacher = new Teacher('', 10, []);
  statusD: number = -1;
  statusU: number = -1;

  constructor(private teacherService: TeacherServiceService) {
    this.teachers = teacherService.get();
  }

  updateTeacher(t: Teacher) {
    this.teacher = t;
    this.statusU = t.ID;
  }
  deleteTeacher(t: Teacher) {
    console.log(this.statusD);
    this.teacher = t;
    this.statusD = t.ID;
  }
  addTeacher() {
    this.teacher.ID = this.teachers.length + 1;
    this.statusD = 5;
  }
  onClose(f: any) {
    this.statusD = -10;
    this.statusU = -10;
    this.teacher = new Teacher('', 10, []);
  }
}
