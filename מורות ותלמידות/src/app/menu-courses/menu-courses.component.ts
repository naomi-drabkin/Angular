
import {Component} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { Course } from '../models/Course';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../Services/UseService/user-service.service';

/**
 * @title Basic menu
 */
@Component({
  selector: 'menu-overview-example',
  templateUrl: './menu-courses.Component.html',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule,CommonModule],
  styleUrl: './menu-courses.Component.css'
})
export class MenuOverviewExample {

courses: Course[];
  selectedOption: Course[];
  static index = 0;
  active = true;

  constructor(private CourseService: UserServiceService) {
    this.courses = CourseService.getCourses();
    this.selectedOption = [];
  }
  changeStyle(){

  }
  changeClass(){
    this.active = !this.active;
  }

}
    
  
