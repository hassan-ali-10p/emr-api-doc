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
      }, null, "  ")
    },
    {name: 'Slot Search', url: 'v1/athena/fhir/Slot', httpVerb: 'GET', params: {}},
    {name: 'Listener Create Appointment', url: 'v1/endpoint/fhir', httpVerb: 'POST', payload:
      JSON.stringify({
        "Meta": {
          "DataModel": "Scheduling",
          "EventType": "New",
          "Test": "true",
          "Source": {
            "ID": "f534f5ac-59c3-4564-b52c-6181d2613c57",
            "Name": "athena"
          },
          "Destinations": [
            {
              "ID": "2be89fc1-c528-4f3f-983e-a961225b6931",
              "Name": "avizia-listener"
            }
          ]
        },
        "Patient": {
          "Identifiers": [
            {
              "ID": "e167267c-16c9-4fe3-96ae-9cff5703e90a",
              "IDType": "EHRID"
            },
            {
              "ID": "a1d4ee8aba494ca^^^&1.3.6.1.4.1.21367.2005.13.20.1000&ISO",
              "IDType": "NIST"
            }
          ],
          "Demographics": {
            "FirstName": "Timothy",
            "MiddleName": "Paul",
            "LastName": "Bixby",
            "DOB": "2008-01-06",
            "SSN": "101-01-0001",
            "Sex": "Male",
            "Race": "Asian",
            "IsHispanic": null,
            "MaritalStatus": "Single",
            "IsDeceased": null,
            "DeathDateTime": null,
            "PhoneNumber": {
              "Home": "+18088675301",
              "Office": null,
              "Mobile": null
            },
            "EmailAddresses": [

            ],
            "Language": "en",
            "Citizenship": [

            ],
            "Address": {
              "StreetAddress": "4762 Hickory Street",
              "City": "Monroe",
              "State": "WI",
              "ZIP": "53566",
              "County": "Green",
              "Country": "US"
            }
          }
        },
        "Visit": {
          "VisitNumber": "1234",
          "VisitDateTime": "2017-02-21T07:43:06.165Z",
          "PatientClass": null,
          "Status": null,
          "Duration": 15,
          "Reason": "Check up",
          "AttendingProvider": {
            "ID": "4356789876",
            "IDType": "NPI",
            "FirstName": "Pat",
            "LastName": "Granite",
            "Credentials": [
              "MD"
            ],
            "Address": {
              "StreetAddress": "123 Main St.",
              "City": "Madison",
              "State": "WI",
              "ZIP": "53703",
              "County": "Dane",
              "Country": "USA"
            },
            "PhoneNumber": {
              "Office": "+16085551234"
            }
          },
          "Location": {
            "Type": "Inpatient",
            "Facility": "RES General Hospital",
            "Department": "3N"
          },
          "Diagnoses": [
            {
              "Code": "R07.0",
              "Codeset": "ICD-10",
              "Name": "Pain in throat",
              "Type": null
            }
          ]
        }
      }, null, "  ")
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
