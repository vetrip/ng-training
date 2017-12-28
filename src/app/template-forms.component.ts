import { Component, OnInit } from '@angular/core';
import { User } from './user/user';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss']
})
export class TemplateFormsComponent implements OnInit {
  user: User = {
    loginId: null,
    firstName: null,
    lastName: null,
    phoneNumber: null,
    email: null
  };

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.user);
  }
}
