import { Component } from '@angular/core';
import { EnterSiteService } from '../Services/enter web site/enter-site.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-out',
  standalone: true,
  imports: [],
  templateUrl: './log-out.component.html',
  styleUrl: './log-out.component.css',
})
export class LogOutComponent {
  LogInForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required]),
  });

  constructor(private enterSite: EnterSiteService) {}

  LogIn() {
    this.enterSite.logIn(this.LogInForm.value.email as string);
  }
}
