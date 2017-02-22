import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiCallService {
  private apiUrl = "https://110.93.199.13:1443/";

  constructor(private http: Http) { }

  getToken(): Promise<any>{
    return this.http.post(`${this.apiUrl}v1/auth`, {
            	"key": "key123",
            	"secret": "secret123"
            })
           .toPromise()
           .then(response => {return response.json().Authorization as string})
  }
}
