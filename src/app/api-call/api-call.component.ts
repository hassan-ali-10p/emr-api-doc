import { Component, OnInit, Input } from '@angular/core';
import { IApiCall } from '../api-call';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCallComponent implements OnInit {
  @Input()
  apiCall: IApiCall;

  constructor() { }

  ngOnInit() {
  }

  onSubmit():void {
    console.log(this.apiCall);
  }

}
