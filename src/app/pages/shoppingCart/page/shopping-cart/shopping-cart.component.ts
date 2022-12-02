import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { ShoppingService } from '../../../../services/shopping.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items:any[]=[];
  constructor(
    private readonly storageService: StorageService,
    private readonly shoppingService: ShoppingService
  ) {

   }

  ngOnInit(): void {
    this.loadItem();
  }

  loadItem(){
    this.items = this.storageService.getItem('shoppingCart')
  }

  deleteItem(item:any){
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);  
    this.storageService.setItem('shoppingCart', this.items);
  }

}
