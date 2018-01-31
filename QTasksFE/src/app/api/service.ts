import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

// A API.
const URL = 'https://q-tasks.herokuapp.com/tasks';

@Injectable()
export class TasksAPIService {
  constructor(private http: Http) {}

  getAll = (): Observable<any> =>
    this.http.get(URL)
      .map(resp => resp.json())
}
