import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { IApiCall } from '../api-call';
import { ApiCallService } from '../api-call.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCallComponent implements OnInit, OnChanges {
  @Input()
  apiCall: IApiCall;
  token: string;
  isLoading: boolean = false;

  public getRequestForm;

  constructor(private apiCallService: ApiCallService, public fb: FormBuilder, private _service: NotificationsService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.getRequestForm = new FormGroup({});
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
    }).catch((error) => {
      this._service.error(
          'Invalid Token',
          'Please refresh the page.',
          {
              timeOut: 5000,
              showProgressBar: true,
              pauseOnHover: false,
              clickToClose: false
          }
      )
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
      return this.apiCall.response = result;
    })
    .catch((error) => {
      this.isLoading = false;
      return this.apiCall.response = error;
    });
  }

  postRequest() {
    this.apiCallService.postRequest(this.apiCall.payload, this.apiCall.url).then((result) => {
      this.isLoading = false;
      return this.apiCall.response = result;
    })
    .catch((error) => {
      this.isLoading = false;
      return this.apiCall.response = error;
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
    this.apiCall.response = null;
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
