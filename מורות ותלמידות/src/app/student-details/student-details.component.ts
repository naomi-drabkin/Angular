import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Student } from '../models/Student';
import { log } from 'console';
import { InforomationComponent } from '../inforomation/inforomation.component';


@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [InforomationComponent],
  templateUrl: './student-details.component.html',
  // styleUrl: './student-details.component.css',
})
export class StudentDetailsComponent {
  @Input() id: number = 0;
  @Input() list: Student[] = [];
  student: Student;
  @Output() saveStudent: EventEmitter<any> = new EventEmitter<any>();
  text: string = '';
  showDetails() {
    let index = this.list.findIndex((stu) => stu.Id == this.id);
    return this.list[index];
  }

  saveDetailes(
    id: string,
    firse_name: string,
    last_name: string,
    address: string,
    active: string,
    avg: string,
    date: string,
    ispay: string
  ) {
    const id_number: number = Number(id);
    const avg_number: number = Number(avg);
    const active_boolean = Boolean(active);
    const date_Date = new Date(date);
    const pay = Boolean(ispay);

    this.student = new Student(
      id_number,
      firse_name,
      last_name,
      address,
      active_boolean,
      avg_number,
      date_Date,
      pay
    );
    console.log('child');

    console.log(this.student);

    this.saveStudent.emit(this.student);
  }
}
