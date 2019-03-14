import { Component, OnInit } from '@angular/core';
import { FormService, ToastService, NotificationService } from '../services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormPage } from '../shared';
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [FormService, NotificationService, ToastService, FormBuilder]
})
export class ContactComponent extends FormPage implements OnInit {
  public year = moment().year();
  emailForm: FormGroup;
  messageSentSuccess: boolean;
  messageSentError: boolean;
  events: any[] = [];

  constructor(
    private service: FormService,
    private _fb: FormBuilder,
    private notificationService: NotificationService) {
    super();
    this.emailForm = this._fb.group({
      'email': [null, Validators.compose([Validators.required])],
      'name': [null, Validators.compose([Validators.required])],
      'message': [null, Validators.compose([Validators.required, Validators.minLength(300)])]
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any) {
    this.service.postEmail(form.value.name.toString(), form.value.email.toString(), form.value.message.toString())
      .map(res => res)
      .subscribe(
      res => {
        this.notificationService.success('Your inquiry was successfully submitted.');
        this.emailForm.reset();
      },
      error => {
        this.messageSentError = true;
        this.notificationService.error(error, 'Submission was unsuccessful.');
        this.emailForm.reset();
        setTimeout(() => { this.messageSentError = false; }, 3000);
      },
      () => {
        this.messageSentSuccess = true;
        setTimeout(() => { this.messageSentSuccess = false; }, 3000);
      }
      );
  }
}
