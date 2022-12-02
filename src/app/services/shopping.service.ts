import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeysPath } from '../model/key.path.enum';
import { BaseService } from './base.service';
import { StorageService } from './storage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetailItemComponent } from '../pages/home/components/modal-detail-item/modal-detail-item.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService extends BaseService{

  count: number = 0;
  myCarrito: any[] = []
  constructor(
    public override readonly http: HttpClient,
    private readonly storageService: StorageService,
    private readonly modalService: NgbModal,
  ) { 
    super(http)
  }

  getProducts(){
    return this.get(KeysPath.products);
  }

  addItem(item:any){ 
    this.myCarrito.push(item);
    
    this.storageService.setItem('shoppingCart', this.myCarrito);
  }


  showModalDetailItem( item:any, allowClose: boolean = true,) {
    const modal = this.modalService.open(ModalDetailItemComponent, {
      centered: true,
      backdrop: true,
      size: 'lg',
      keyboard: false

    });
    modal.componentInstance.item = item;


    return modal.result.then((result: any) => {
      return Promise.resolve(result);
    }, (reason: any) => {
      return Promise.reject(reason);
    });
  }

}
