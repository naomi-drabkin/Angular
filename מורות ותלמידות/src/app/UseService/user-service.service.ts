import { Injectable } from '@angular/core';
import { Course } from '../models/Course';
import { courses } from '../models/enum_Course';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private Allcourses = [
    new Course(1, 'Accounting', courses.Accounting),
    new Course(2, 'software_engineering', courses.software_engineering),
    new Course(3, 'graphics', courses.graphics),
    new Course(4, 'tax_consulting', courses.tax_consulting),
  ];

  // constructor() { }

  getCourses() {
    return this.Allcourses;
  }
}
