import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  httpOptions = {
    headers: new HttpHeaders()
  };


  constructor(public readonly http: HttpClient) {
    this.httpOptions.headers = this.httpOptions.headers.set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
  }

  get(path: string,): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`, this.httpOptions);
  }

 
}
