import { ItemListService } from './../item-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor(public ils: ItemListService) { }

  ngOnInit(): void {
  }

}
