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

  patientSearch() {
    this.apiCallService.patientSearch(this.apiCall.params).then((result) => {
      this.isLoading = false;
      return this.response = result;
    })
    .catch((error) => {
      this.isLoading = false;
      return this.response = error;
    });
  }

  onSubmit():void {
    this.isLoading = true;
    this.patientSearch();
  }

}
