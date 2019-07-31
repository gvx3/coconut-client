import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  private landingPageUrl = environment.apiUrl + '/landings';

  constructor(private http: HttpClient) { }

  getLandingHomePage(params?): Observable<any> {
    return this.http.get<any>(this.landingPageUrl, {params});
  }

  getLandingNews(params?): Observable<any> {
    return this.http.get<any>(this.landingPageUrl, {params});
  }

  getLandingStore(params?): Observable<any> {
    return this.http.get<any>(this.landingPageUrl, {params});
  }

  getLandingOurStory(params?): Observable<any> {
    return this.http.get<any>(this.landingPageUrl, {params});
  }
}
