import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Teacher } from '../models/Teacher';
import { FormsModule } from '@angular/forms';
import { TeacherServiceService } from '../Services/TeacherServics/teacher-service.service';

@Component({
  selector: 'app-teachr-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './teachr-form.component.html',
  styleUrl: './teachr-form.component.css',
})
export class TeachrFormComponent {
  @Input() teacher: Teacher = new Teacher('', -1, []);
  @Input() isAdd = false;
  @Input() isDelete = false;
  @Input() isEdit = false;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  constructor(private teacherService: TeacherServiceService) {}

  onSubmit() {
    if (this.isAdd) this.teacherService.Add(this.teacher);
    else if (this.isDelete) this.teacherService.Delete(this.teacher);
    else if (this.isEdit) this.teacherService.update(this.teacher);
    this.isAdd = false;
    this.isDelete = false;
    this.isEdit = false;
    console.log(this.teacher, ' :Submitted');
    this.close.emit(true);
  }
}
