import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiCallService {
  private apiUrl = "https://110.93.199.13:1443/";
  private token;
  private headers;

  setHeader(token) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': token
    });
  }

  constructor(private http: Http) { }

  getToken(): Promise<any>{
    return this.http.post(`${this.apiUrl}v1/auth`, {
            	"key": "key123",
            	"secret": "secret123"
            })
           .toPromise()
           .then(response => {
             this.token = response.json().Authorization;
             return response.json().Authorization as string;
           })
  }

  patientSearch(params): Promise<any>{
    let newparams = new URLSearchParams();
    newparams.append('name', 'Timothy');
    let basicOptions:RequestOptionsArgs = {
      search: newparams,
      headers: this.headers,
    };

    return this.http.get(`${this.apiUrl}v1/athena/fhir/PatientSearch`, basicOptions)
           .toPromise()
           .then(response => {return response.json(); })
  }
}
