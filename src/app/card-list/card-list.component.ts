import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardListComponent implements OnInit {

  studentObj = new Student(11,"Maddiguntla","Narendra");

  fullName:any=[];
  i:number =0;

  
  saveData(emp) {
  this.i++ 
  this.fullName.push({"Id":this.i,
                      "fname":emp.fname,
                      "lname":emp.lname});
    }
    deleteData(data){
      this.fullName.splice(this.fullName.indexOf(data),1);
    }

    updateData(emp){
      
    }    
  constructor() { } 

  ngOnInit() {
  }

}
