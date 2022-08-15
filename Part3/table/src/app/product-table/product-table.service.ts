import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductTableService {

  constructor(private http :HttpClient) { }

  getProductList() : Observable<any> {
    return this.http.get('https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json');
  }
}