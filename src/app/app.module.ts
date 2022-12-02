import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/page/home/home.component';
import { AuthComponent } from './pages/login/auth/auth.component';
import { ShoppingCartComponent } from './pages/shoppingCart/page/shopping-cart/shopping-cart.component';
import { HeaderComponent } from './pages/home/components/header/header.component';
import { ModalDetailItemComponent } from './pages/home/components/modal-detail-item/modal-detail-item.component';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    ShoppingCartComponent,
    HeaderComponent,
    ModalDetailItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbAlertModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
