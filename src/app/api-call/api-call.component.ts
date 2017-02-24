import { Component, OnInit, Input } from '@angular/core';
import { IApiCall } from '../api-call';
import { ApiCallService } from '../api-call.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCallComponent implements OnInit {
  @Input()
  apiCall: IApiCall;
  token: string;
  response: any;
  isLoading: boolean = false;

  public getRequestForm = new FormGroup({});

  constructor(private apiCallService: ApiCallService, public fb: FormBuilder) { }

  ngOnInit() {
    if (this.apiCall.params) {
      Object.keys(this.apiCall.params).forEach((paramKey) => {
        this.getRequestForm.addControl(paramKey, new FormControl(this.apiCall.params[paramKey]));
        this.getRequestForm.addControl(`${paramKey}Checked`, new FormControl(true));
      });
    }
    this.getToken();
  }

  doLogin(event){
    console.log(this.getRequestForm.value);
  }

  getToken() {
    this.apiCallService.getToken().then((respToken) => {
      this.token = respToken;
      this.apiCallService.setHeader(this.token);
    });
  }

  getRequest(params) {
    let tempParams = {};
    Object.keys(this.apiCall.params).forEach((paramKey) => {
      if (params[`${paramKey}Checked`] == true) {
        tempParams[paramKey] = params[paramKey];
      }
    })
    this.apiCallService.getRequest(tempParams, this.apiCall.url).then((result) => {
      this.isLoading = false;
      return this.response = result;
    })
    .catch((error) => {
      this.isLoading = false;
      return this.response = error;
    });
  }

  postRequest() {
    this.apiCallService.postRequest(this.apiCall.payload, this.apiCall.url).then((result) => {
      this.isLoading = false;
      return this.response = result;
    })
    .catch((error) => {
      this.isLoading = false;
      return this.response = error;
    });
  }

  paramKeys() {
    if (this.apiCall.params) {
      return Object.keys(this.apiCall.params);
    } else {
      return [];
    }
  }

  removeParam(paramKey) {
    delete this.apiCall.params[paramKey];
  }

  onSubmit():void {
    this.isLoading = true;
    switch(this.apiCall.httpVerb) {
      case "GET":
        this.getRequest(this.getRequestForm.value);
        break;
      case "POST":
        this.postRequest();
        break;
      default: return null;
    }
  }

}
