import { Component, OnInit, Input } from '@angular/core';
import { IApiCall } from '../api-call';
import { ApiCallService } from '../api-call.service';

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

  constructor(private apiCallService: ApiCallService) { }

  ngOnInit() {
    this.getToken();
  }

  getToken() {
    this.apiCallService.getToken().then((respToken) => {
      this.token = respToken;
      this.apiCallService.setHeader(this.token);
    });
  }

  getRequest() {
    this.apiCallService.getRequest(this.apiCall.params, this.apiCall.url).then((result) => {
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
        this.getRequest();
        break;
      case "POST":
        this.postRequest();
        break;
      default: return null;
    }
  }

}
