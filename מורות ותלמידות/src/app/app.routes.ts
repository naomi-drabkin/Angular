import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseStudentComponent } from './course-student/course-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeachrFormComponent } from './teachr-form/teachr-form.component';
import { IkonComponent } from './ikon/ikon.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    {path:'' , component: MenuComponent},
    {path:'Course_Student' , component:CourseStudentComponent},
    {path:'Student_List',component:StudentListComponent},
    {path:'Teachr_Form',component:TeachrFormComponent},
    {path:'Ikons',component:IkonComponent},
];
