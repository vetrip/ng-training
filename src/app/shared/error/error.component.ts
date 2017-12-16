import { AbstractControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControlDirective } from '@angular/forms/src/directives/abstract_control_directive';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  private static readonly errorMessages = {
    'required': () => 'Required field',
    'minlength': params => 'Minimum required length is :' + params.requiredLength
  };

  @Input() control: AbstractControlDirective | AbstractControl;

  constructor() {}

  ngOnInit() {}

  showErrors(): boolean {
    return (
      this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched)
    );
  }

  errors(): string[] {
    return Object.keys(this.control.errors).map(field =>
      this.getErrorMsg(field, this.control.errors[field])
    );
  }

  getErrorMsg(type: string, params: any): string {
    return ErrorComponent.errorMessages[type](params);
  }
}
