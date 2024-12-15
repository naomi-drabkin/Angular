import { Component } from '@angular/core';
import { Course } from '../models/Course';
import { UserServiceService } from '../UseService/user-service.service';
import { CommonModule } from '@angular/common';
import {DirectiveCourseDirective} from '../directiveCourse/directive-course.directive'

@Component({
  selector: 'app-course-student',
  standalone: true,
  imports: [CommonModule,DirectiveCourseDirective],
  templateUrl: './course-student.component.html',
  styleUrl: './course-student.component.css',
})
export class CourseStudentComponent {
  courses: Course[];
  selectedOption: String[];
  static index = 0;

  color1 = "yellow"
  color2 = "red"
  color3 = "green"
  color4 = "blue"


  constructor(private CourseService: UserServiceService) {
    this.courses = CourseService.getCourses();
    this.selectedOption = [];
  }

  onOptionSelected(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedOption[CourseStudentComponent.index++] = selectElement.value;
    console.log(this.selectedOption[CourseStudentComponent.index++]);
  }
}
