import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { AuthModule } from './auth/auth.module';

// COMPONENTS
// =======================
import { HeaderComponent } from './components/header.component';
import { ProductListComponent } from './components/product-list.component';
import { CartComponent } from './components/cart.component';

// SERVICES
// =======================
import { MyMainService } from './main.service';
import { MySharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    CartComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    MyMainService,
    MySharedService
  ]
})
export class AppModule { }
