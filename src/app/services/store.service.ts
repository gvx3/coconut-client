import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private baseUrl = environment.apiUrl + '/stores';
  constructor(private http: HttpClient) { }

  getStoreLatest(params?): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl, {params});
  }

  getStoreSuggested(params?): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl, {params});
  }

  getTopStoreSuggested(params?): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl, {params});
  }

}
