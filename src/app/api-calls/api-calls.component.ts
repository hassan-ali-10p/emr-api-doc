import { Component, OnInit } from '@angular/core';
import { IApiCall } from '../api-call';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.css']
})
export class ApiCallsComponent implements OnInit {
  apiCalls: IApiCall[] = [
    {name: 'Google', url: 'http://www.google.com', httpVerb: 'GET', params: {name: 'Timothy'}},
    {name: 'Yahoo', url: 'http://www.yahoo.com', httpVerb: 'GET'}
  ];
  selectedApiCall: IApiCall;

  constructor() { }

  ngOnInit() {
  }

  onSelect(apiCall: IApiCall): void {
    this.selectedApiCall = apiCall;
  }
}
