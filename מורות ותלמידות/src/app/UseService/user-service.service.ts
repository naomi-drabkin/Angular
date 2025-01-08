import { Injectable } from '@angular/core';
import { Course } from '../models/Course';
import { courses } from '../models/enum_Course';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private Allcourses = [
    new Course("1", 'Accounting', courses.Accounting,"4","1500"),
    new Course("2", 'software_engineering', courses.software_engineering,"2","1420"),
    new Course("3", 'graphics', courses.graphics,"2","1000"),
    new Course("4", 'tax_consulting', courses.tax_consulting,"3","950"),
  ];

  // constructor() { }

  getCourses() {
    return this.Allcourses;
  }
}
