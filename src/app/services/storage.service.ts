import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storage:any;
  constructor() {
    this.storage = localStorage;
   }

  setItem(key: string, data: any) {
    const jsonData = JSON.stringify(data)
    this.storage.setItem(key, jsonData)
  }

  getItem(key: string) {
    var data = this.storage.getItem(key)
    return data ? JSON.parse(data) : null;
  }
  
  removeItemSele(key: any) {
    localStorage.removeItem(key);
  }
}
