import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { job } from 'src/app/job';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private API_URL = 'http://localhost:5300/tasks'

  constructor(private http:HttpClient) { }

  getJobs(): Observable<job[]> {
    return this.http.get<job[]>(this.API_URL);
   
  }

}