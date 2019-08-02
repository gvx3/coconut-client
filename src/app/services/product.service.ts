import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = environment.apiUrl + '/products';
  private ingredientUrl = environment.apiUrl + '/ingredients';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any[]> {
    return this.http.get<any[]>(this.productUrl);
  }

  getIngredient(): Observable<any[]> {
    return this.http.get<any[]>(this.ingredientUrl);
  }
}
