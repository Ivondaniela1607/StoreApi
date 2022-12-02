import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../../../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService,
  ) { 

  }

  ngOnInit(): void {

  }

  openShoppingCart(){
    this.router.navigate(['shoppingCart'])
  }

  volver() {
    this.router.navigate(['home'])
  }
}
