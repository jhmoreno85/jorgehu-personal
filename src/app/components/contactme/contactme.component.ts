import { Component } from '@angular/core';
import { Contact } from "../../shared/domains/Contact";
import { ControlGroup, FormBuilder, Validators } from "@angular/common";
import { EmailValidator } from "../../shared/Validators/email-validator";

@Component({
  moduleId: module.id,
  selector: 'app-contactme',
  templateUrl: 'contactme.component.html'
})
export class ContactmeComponent {

  form: ControlGroup;
  contact = new Contact();

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', EmailValidator.email],
      message: ['', Validators.required],
    });

  }
}
