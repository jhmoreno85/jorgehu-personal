/**
 * Created by jlhuerta on 8/31/16.
 */
import {Control} from '@angular/common';

export class EmailValidator{
  static email(control: Control){
    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var valid = regEx.test(control.value);
    return valid ? null : { email: true };
  }
}
