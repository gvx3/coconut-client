import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = environment.apiUrl + '/contacts';

  constructor(private http: HttpClient) { }

  getContact(): Observable<any> {
    return this.http.get<any>(this.baseUrl).pipe();
  }

}
