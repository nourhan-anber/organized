import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']
})
export class ColumnsComponent implements OnInit {

  @Input()
  categories = [];


  @Output() saveLocal: EventEmitter<any> = new EventEmitter();


  constructor() { 
  }


  ngOnInit(): void {
  }

  save(event){
    localStorage.setItem("Categories",JSON.stringify(this.categories));
  }
  removeCategory(index){
    this.categories.splice(index, 1);
    console.log(this.categories);
    localStorage.setItem("Categories",JSON.stringify(this.categories));    
  }
}
