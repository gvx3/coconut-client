import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = environment.apiUrl + '/news';
  constructor(private http: HttpClient) { }

  getNewsLatest(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map((news) => news.filter(item => item.new_type_id === 1))
    );
  }

  getNewsSuggested(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map((news) => news.filter(item => item.new_type_id === 2))
    );
  }

  getTopNewsSuggested(params?): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl, {params}).pipe(
      map((news) => news.filter(item => item.new_type_id === 2))
    );
  }

  getNewsById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
