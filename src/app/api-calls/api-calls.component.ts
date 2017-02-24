import { Component, OnInit } from '@angular/core';
import { IApiCall } from '../api-call';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.css']
})
export class ApiCallsComponent implements OnInit {
  apiCalls: IApiCall[] = [
    {name: 'Patient Search', url: 'v1/athena/fhir/PatientSearch', httpVerb: 'GET', params: {name: 'Timothy', gender: 'male', birthDate: '2014-12-12'}},
    {name: 'Yahoo', url: 'http://www.yahoo.com', httpVerb: 'GET'},
    {name: 'New Scheduling', url: 'v1/athena/fhir/appointment', httpVerb: 'POST', payload:
      JSON.stringify({
        "identifier": [
          {
            "type": {
              "text": "MR"
            },
            "value": "123"
          }
        ],
        "status": "proposed",
        "minutesDuration": 15,
        "start": "12",
        "slots": [
          {
            "identifier": [
              {
                "value": "782923"
              }
            ],
            "start": "2017-02-11T14:00:00.000Z"
          }
        ],
        "reason": {
          "coding": [
            {
              "system": "abc",
              "code": 563
            }
          ]
        },
        "participant": [
          {
            "actor": {
              "reference": "Patient/123",
              "display": "Bixby, timothy"
            }
          }
        ]
      })
    }
  ];
  selectedApiCall: IApiCall;

  constructor() { }

  ngOnInit() {
  }

  onSelect(apiCall: IApiCall): void {
    this.selectedApiCall = apiCall;
  }
}
