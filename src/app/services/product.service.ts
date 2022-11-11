import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string = 'http://www.dummyproducts.com/api/Products/';

  constructor(private http: HttpClient) {
  }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'http://www.dummyproducts.com/api/Products?rowsPerPage=10&pageNumber=1'
    );
  }
}
