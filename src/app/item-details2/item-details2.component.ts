import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { ItemListService } from '../item-list.service';

@Component({
  selector: 'app-item-details2',
  templateUrl: './item-details2.component.html',
  styleUrls: ['./item-details2.component.scss']
})
export class ItemDetails2Component implements OnInit {

  item: Item={
    id: 0,
    name: '',
    price: 0
  };

  constructor(private activatedRoute: ActivatedRoute,
    private ils: ItemListService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      let itemid=parseInt(params.get("itemid")??"0");

      this.item=this.ils.itemMap.get(itemid) as Item;

    });
  }

}
