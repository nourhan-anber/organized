import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import itemService from '../services/item-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item  = {
    title: "",
    status: "assigned"
  };
  @Input()
  items;


  @Output() save: EventEmitter<any> = new EventEmitter();
  
  constructor(private itemService: itemService) { }

  ngOnInit(): void {

  }
  newItem(){
    this.items.push({
      title: "",
      status: "assigned"
    });
    this.save.emit(true);
  }
  removeItem(i){
    this.items.splice(i, 1);
    this.save.emit(true);

  }

}
