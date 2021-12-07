import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.SUBJECT, locator, route);
  }


  validate() {
    return this.validateForm(this.form.data);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.subjectName);
    flag = flag && validator.isNotNullObject(form.description);
    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.subjectName = data.subjectName;
    form.courseId = data.courseId;
    form.description = data.description;
    console.log('Populated Form', form);
  }
}
