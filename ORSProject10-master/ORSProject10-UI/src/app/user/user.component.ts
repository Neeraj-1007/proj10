import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import {FormBuilder,FormGroup} from '@angular/forms';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends BaseCtl {

  fileToUpload:File=null;
  userForm:FormGroup=null;
  uploadForm:FormGroup;
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute,private httpClient:HttpClient) {
    super(locator.endpoints.USER, locator, route);
  }
handleFileInput(files:FileList){
  this.fileToUpload=files.item(0);
  console.log(this.fileToUpload);
}

onUpload(userform : FormData) {
  super.submit();
  this.onSubmitProfile(this.fileToUpload, this.userForm).subscribe(data => {
  console.log(this.fileToUpload);
  }, error => {
  console.log(error);
  });
  
  
  }
  
  onSubmitProfile(fileToUpload: File, userform : FormGroup) {
  const formData = new FormData();
  
  formData.append('file', fileToUpload);
  formData.append('userForm', JSON.stringify(this.userForm));
  
  
  
  return this.httpClient.post("http://localhost:8080/User/profilePic/1", formData);
  
  
  
  }
  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.firstName);
    flag = flag && validator.isNotNullObject(form.lastName);
    flag = flag && validator.isNotNullObject(form.loginId);
    flag = flag && validator.isNotNullObject(form.password);
    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.firstName = data.firstName;
    form.lastName = data.lastName;
    form.email  = data.email;
    form.loginId = data.loginId;
    form.password = data.password;
    form.gender = data.gender;
    form.alternateMobile = data.alternateMobile;
    form.roleId = data.roleId;
    form.status = data.status;
    console.log('Populated Form', form);
  }

  test(){
  
  }

}
