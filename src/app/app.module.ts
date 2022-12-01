import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/login/auth/auth.component';
import { CardComponent } from './pages/home/components/card/card.component';
import { HomeComponent } from './pages/home/page/home/home.component';
import { ShoppingCartComponent } from './pages/shoppingCart/page/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
