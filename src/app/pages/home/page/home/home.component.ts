import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { ShoppingService } from '../../../../services/shopping.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  count:number = 0;
  data:any[] = [];
  featured:any[] = [];
  isActive:boolean=false;
  constructor(
    private readonly serviceShop: ShoppingService,
    private readonly storageService: StorageService,
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.serviceShop.getProducts().subscribe((resp:any) => {
      this.data = resp;
      this.getFeatured();
    })
  }

  getFeatured(){
    this.data.forEach(element => {
      if(element.price < 20){
        this.featured.push(element);
      }
    });
  }

  addItem(item: any){
    this.serviceShop.addItem(item)
    this.count = this.count +1;
    this.storageService.setItem('countItem', this.count)
    
  }

  detailItem(item: any) {
    this.serviceShop.showModalDetailItem(item)
      .then((response) => {
      }, () => { })
  }

 

}
