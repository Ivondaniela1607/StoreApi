import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './page/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ShoppingCartRoutingModule { }
