import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { log } from 'console';
import { ClassServiceService } from '../ClassServise/class-service.service';
import { CommonModule } from '@angular/common';
import { Class } from '../models/Class';

@Component({
  selector: 'app-class-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './class-form.component.html',
  styleUrl: './class-form.component.css',
})
export class ClassFormComponent {
  isWrite: boolean = false;
  ClassForm: FormGroup;
  newClass: Class;
  allClass: any[] = [];
  ClassFormComponent: any;
  level_: string = '';
  num: number = 0;
  constructor(private fb: FormBuilder) {
    this.ClassForm = this.fb.group({
      ID: [''],
      level: [''],
      number: [''],
    });
  }

  addClass() {
    const addClasses = this.fb.group({
      ID: ['', Validators.required],
      level: ['', [Validators.required, Validators.max(1)]],
      number: ['', Validators.required],
    });
  }

  Submit() {
    this.level_ = this.ClassForm.get('level')?.value;
    this.num = this.ClassForm.get('number')?.value;
    this.allClass.push(this.ClassForm.value);
    console.log(this.ClassForm.value);
  }
}
