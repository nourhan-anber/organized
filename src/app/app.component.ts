import { Component } from '@angular/core';
import * as moment from 'moment';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  day = moment().format('MMMM Do YYYY');
  hours = moment().format( 'h:mm:ss a');
  categories = [];
  title = "";
  closeResult = '';

  constructor(private modalService: NgbModal) {
    const str = localStorage.getItem("Categories");
    if(str){
      try{
        this.categories = JSON.parse(str);
      }catch(e){

      }
    }

  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  saveCategory(modal){
    this.categories.push({
      title: this.title,
      items: [{
        title: "",
        status: "assigned"
      }]
    });
    modal.dismiss('Save click');
    this.title = "";
    localStorage.setItem("Categories",JSON.stringify(this.categories));
  }
}
