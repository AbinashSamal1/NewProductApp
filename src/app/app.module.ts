import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgConfirmModule } from 'ng-confirm-box';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductNavBarComponent } from './product-nav-bar/product-nav-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, ProductNavBarComponent, ProductListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgConfirmModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      timeOut: 3000,
    }),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
