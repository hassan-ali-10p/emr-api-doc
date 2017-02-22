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
    this.apiCallService.patientSearch(this.apiCall.params).then((result) => {this.response = result});
  }

  onSubmit():void {
    this.patientSearch();
  }

}
