import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AromaticCoconutService {
  private aromaticUrl = environment.apiUrl + '/aromatics';
  private benefitUrl = environment.apiUrl + '/benefits';
  constructor(private http: HttpClient) { }

  getAromatic(): Observable<any[]> {
    return this.http.get<any[]>(this.aromaticUrl);
  }

  getBenefit(): Observable<any[]> {
    return this.http.get<any[]>(this.benefitUrl);
  }
}
