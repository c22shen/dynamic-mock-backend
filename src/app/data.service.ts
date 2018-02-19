import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';


@Injectable()
export class DataService {

  result: Observable<any>;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get("/api/users")
    .retry(3)
    .catch(err => {
      console.log(err);
      return Observable.of(err);
    })
  }

}