import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string = 'http://www.dummyproducts.com/api/Products/';

  constructor(private http: HttpClient) {}

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'http://www.dummyproducts.com/api/Products?rowsPerPage=10&pageNumber=1'
    );
  }
  delete(productId: number,data:any) {
    return this.http.delete<any>(
      'http://www.dummyproducts.com/api/Products/' + productId
    );
  }
  activate(productId: number) {
    return this.http.post(this.url + productId + '/reactivate', {});
  }
  deActivate(productId: number) {
    return this.http.post(this.url + productId + '/deactivate', {});
  }
}
