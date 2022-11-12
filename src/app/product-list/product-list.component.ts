import { Component, OnInit } from '@angular/core';
import { NgConfirmService } from 'ng-confirm-box';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];

  constructor(
    private api: ProductService,
    private confirm: NgConfirmService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct() {
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
    });
  }
  deleteProduct(productId: number, productName: string) {
    this.confirm.showConfirm(
      'Are you you want to delete' + ' ' + productName,
      () => {
        this.api.delete(productId, productName).subscribe((res) => {
          this.loadProduct();
        });
      },

      () => {}
    );
  }
  deleteConf(productName: string) {
    this.toastr.error(productName + 'has been deleted');
  }
  activateProduct(productId: number, productName: string) {
    this.confirm.showConfirm(
      productName + ' ' + 'will be activated.Are you sure?',
      () => {
        this.api.activate(productId).subscribe((res) => {
          this.loadProduct();
          this.toastr.success(productName + ' ' + 'is Activated');
        });
      },
      () => {}
    );
  }
  deActivateProd(productId: number, productName: string) {
    this.confirm.showConfirm(
      productName + ' ' + 'Will be De-Activated. Are you sure?',
      () => {
        this.api.deActivate(productId).subscribe(() => {
          this.loadProduct();
        });
      },
      () => {}
    );
  }
}
