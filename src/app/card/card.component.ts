import { Component, OnInit, ViewEncapsulation, Input, EventEmitter,Output} from '@angular/core';
import { Student } from '../student';
import { Employee } from '../employee';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
    @Input() student : Student;
    @Output() saveEmployee = new EventEmitter<Employee>();
    employee = new Employee();

    save() {
	 this.employee.fname = this.student.fname;		
	 this.employee.lname = this.student.lname;
		
	 this.saveEmployee.emit(this.employee);
    }	

  constructor() { }

  ngOnInit() {
  }

}
