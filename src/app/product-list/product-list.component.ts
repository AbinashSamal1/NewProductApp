import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import{ProductService} from '../services/product.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];

  constructor(private api: ProductService) {}

  ngOnInit(): void {
    this.loadProduct()
  }
  loadProduct() {
  this.api.getProduct().subscribe((res)=>{
    this.productList = res;
  })
  }


}
