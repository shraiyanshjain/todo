import { ItemListService } from './../item-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

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

      this.item=this.ils.items.find((item)=>item.id===itemid) as Item;

      // for(let i of this.ils.items)
      // {
      //   if(i.id===itemid)
      //   {
      //     this.item=i;
      //   }
      // }
    });
  }
}
