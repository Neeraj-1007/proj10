import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.TIMETABLE, locator, route);
  }


  validate() {
    return this.validateForm(this.form.data);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.courseId);
    flag = flag && validator.isNotNullObject(form.subjectId);
    flag = flag && validator.isNotNullObject(form.description);
    flag = flag && validator.isNotNullObject(form.examDate);
    flag = flag && validator.isNotNullObject(form.examTime);
    flag = flag && validator.isNotNullObject(form.semester);
    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.courseId = data.courseId;
    form.subjectId = data.subjectId;
    form.description = data.description;
    form.examDate = data.examDate;
    form.examTime = data.examTime;
    form.semester = data.semester;
    console.log('Populated Form', form);
  }

}
