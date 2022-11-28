import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  public items: Item[] = [
    { id: 1, name: 'Pen', price: 100 },
    { id: 2, name: 'Pencil', price: 200 },
    { id: 3, name: 'Fountain Pen', price: 300 }
  ];

  public itemMap: Map<number, Item> = new Map();

  constructor() {
    this.itemMap.set(100, { id: 100, name: 'Laptop', price: 50000 });
    this.itemMap.set(101, { id: 101, name: 'Mobile', price: 60000 });
    this.itemMap.set(102, { id: 102, name: 'Desktop', price: 10000 });
  }
}
